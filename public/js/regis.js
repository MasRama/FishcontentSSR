// const { formatDiagnostic } = require("typescript");

// validate function
const validateEmail = (e) => {
    const value = e.value;
    if (!value.match(/[a-zA-Z1-9]@[a-z]{4,}[.]/g)) return { isValid : false ,message : "Format email salah"}
    return { isValid: true, message: '' }
}
const validateTel = (e) => {

    const value = e.value;
    if (isNaN(Number(value))) return {isValid : false , message : "Hanya menerima angka !"} 
    else if (!value.match(/08/g)) return {isValid : false ,message : "Nomor harus diawali dengan 08 !"} 
    return { isValid: true, message: '' }
}
const validatePass = (e) => {   
    const value = e.value;
    if (value.length < 8) return {isValid : false , message : "Password minimal 8 karakter !"} 
    else if (!value.match(/[A-Z]/g)) return {isValid : false ,message : "Password harus mengandung 1 huruf kapital !"};
    else if (!value.match(/[0-9]/g)) return {isValid : false ,message : "Password harus mengandung sebuah angka !"};
    return { isValid: true, message: '' }
}

const validatePostC = (e) => {
    const value = e.value;
    if(isNaN(Number(value))) return {isValid : false , message : "hanya menerima angka!"}
    return {isValid : true , message : ""}
}

const checkIsEmpty = (e) => {
    return e.value ? { isValid: true, message: '' } : { isValid: false, message: e.name + ' tidak boleh kosong!' }
}

const validateAll = (e) => {
    const label = e.parentElement.querySelector('.validate');
    let result;
    result = checkIsEmpty(e);
    if (e.type === 'tel') result = validateTel(e);
    else if (e.type === 'email') result = validateEmail(e);
    else if (e.type === 'password') result = validatePass(e);
    else {
        if(e.name === 'Password') result = validatePass(e);
        else if(e.name === 'Kode pos')  result = validatePostC(e);
    }

    label.innerHTML = result.message;
    if (result.isValid){
        label.classList.add('hidden');
        e.classList.remove('input--invalid')
    }else{
        label.classList.remove('hidden');
        e.classList.add('input--invalid');
    }
    return result.isValid;
}

const checkIsSame = (parent, el2) => {
    const validate = parent.parentElement.querySelector('.validate')

    if(parent.value !== el2.value){
        validate.classList.remove('hidden');
        parent.classList.add('input--invalid');
        return false;
    } else {
        validate.classList.add('hidden');
        parent.classList.remove('input--invalid');
        return true;
    }
}

// event handler
const form = document.querySelector('form');
const inputs = [...form.querySelectorAll('input:not([type=submit])')].filter(e => e.type !== 'password' && e.name != 'Detail');
const passwords = document.querySelectorAll('input[type=password]');
const selects = document.querySelectorAll('select');

inputs.forEach(e => {
    e.addEventListener('input' , ({ target }) => {
        validateAll(target);
    });
})
selects.forEach(e => {
    e.addEventListener('change', ({ target }) => {
        validateAll(target);
    })
})

passwords.forEach((e, i) => {
    const trigger = e.nextElementSibling;
    e.addEventListener('input' , () => {
        if (i === 0) validateAll(e);
        else {
            checkIsSame(passwords[1], passwords[0]);
        }
    })
    trigger.addEventListener('click' , (event) => {
        event.preventDefault();
        trigger.classList.toggle('expanded');
        trigger.classList.contains('expanded') ? e.type = 'text' : e.type = 'password';
        
    });
})


const createDD = ({ id, name }) => {

    return `
        <option value=${name.replaceAll(" ",'')} >${name}</option>
    `
}

const renderDropdown = async (url, parent) => {

    let res = await fetch(url);
    res = await res.json();
    res.sort((p, n) => p.name.localeCompare(n.name))
    parent.innerHTML = `
        <option value="" disabled selected>Pilihan ${parent.name}</option> 
    `+ res.map(e => createDD(e)).join('');

    return res;


}

window.addEventListener('DOMContentLoaded', async() => {
    const provIn = document.querySelector('#prov-in');
    const kabIn = document.querySelector('#kab-in');
    const kelIn = document.querySelector('#kel-in');
    const submit = document.querySelector('input[type="submit"]')

    let provinsi, kabupaten;

    if (provIn) {
        provinsi = await renderDropdown('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json', provIn);
        provIn.addEventListener('change', async({ target }) => {
            const id = provinsi.find(e => e.name.replaceAll(' ', '') === target.value).id;
            kabupaten = await renderDropdown(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`, kabIn);
        })
        kabIn.addEventListener('change', async({ target }) => {
            const id = kabupaten.find(e => e.name.replaceAll(' ', '') === target.value).id;
            console.log(kabupaten)
            console.log(target.value)
            console.log(id)

           renderDropdown(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${id}.json`, kelIn)
        })
    }
    // submit 
    form.addEventListener('submit', (event) => {
        
        const isOtherValid = [...inputs].filter(v => v.name !== 'detail').map(e => validateAll(e));
        const isValidPassword = [...passwords].map((e, i) => {
            if (i === 0) return validateAll(e);
            else {
                return checkIsSame(passwords[1], passwords[0]);
            }
        })
        const isValidAddress = [...selects].map(e => validateAll(e));
        const isCanSubmit = [...isOtherValid, ...isValidPassword, ...isValidAddress].every(e => e);
        if (!isCanSubmit) event.preventDefault()
    })
});
