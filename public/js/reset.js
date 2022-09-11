const validatePass = (e) => {
    const value = e.value;
    if (value.length < 8) return { isValid: false, message: "Password minimal 8 karakter !" }
    else if (!value.match(/[A-Z]/g)) return { isValid: false, message: "Password harus mengandung 1 huruf kapital !" };
    else if (!value.match(/[0-9]/g)) return { isValid: false, message: "Password harus mengandung sebuah angka !" };
    return { isValid: true, message: '' }
}

const checkIsSame = (parent, el2) => {
    const validate = parent.parentElement.querySelector('.validate')

    if (parent.value !== el2.value) {
        validate.classList.remove('hidden');
        parent.classList.add('input--invalid');
        return false;
    } else {
        validate.classList.add('hidden');
        parent.classList.remove('input--invalid');
        return true;
    }
}

const validateAll = (e) => {
    const label = e.parentElement.querySelector('.validate');
    let result;
    result = checkIsEmpty(e);
    if (e.type === 'password') result = validatePass(e);
    else {
        if (e.name === 'Password') result = validatePass(e);
        else if (e.name === 'Kode pos') result = validatePostC(e);
    }

    label.innerHTML = result.message;
    if (result.isValid) {
        label.classList.add('hidden');
        e.classList.remove('input--invalid')
    } else {
        label.classList.remove('hidden');
        e.classList.add('input--invalid');
    }
    return result.isValid;
}
const checkIsEmpty = (e) => {
    return e.value ? { isValid: true, message: '' } : { isValid: false, message: e.name + ' tidak boleh kosong!' }
}


const passwords = document.querySelectorAll('input[type="password"]')
const passwordIn = document.querySelector('#password-in')
const passwordConfirm = document.querySelector('#passwordConfirm-in');



passwords.forEach((e, i) => {
    const trigger = e.nextElementSibling;
    e.addEventListener('input', () => {
        if (i === 0) validateAll(e);
        else {
            checkIsSame(passwords[1], passwords[0]);
        }   
    })
    trigger.addEventListener('click', (event) => {
        event.preventDefault();
        trigger.classList.toggle('expanded');
        trigger.classList.contains('expanded') ? e.type = 'text' : e.type = 'password';

    });
});

document.forms[0].addEventListener('submit', (e) => {


    const isValid = validateAll(passwordIn) && checkIsSame(passwordConfirm, passwordIn);
    if(!isValid) e.preventDefault()
})
