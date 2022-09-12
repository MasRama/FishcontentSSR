// const a = a => a.value ? { isValid: !0, message: "" } : { isValid: !1, message: a.name + " tidak boleh kosong!" },b = b => { const c = b.parentElement.querySelector(".validate"), d = a(b); return c.innerHTML = d.message, d.isValid ? (c.classList.add("hidden"), b.classList.remove("input--invalid")) : (c.classList.remove("hidden"), b.classList.add("input--invalid")), d.isValid }, c = document.querySelector("form"), d = c.querySelectorAll("input:not([type=submit])"), e = document.querySelector("input[type=password]"), f = e.nextElementSibling; f.addEventListener("click", a => { a.preventDefault(), f.classList.toggle("expanded"), e.type = f.classList.contains("expanded") ? "text" : "password" }), d.forEach(a => { a.addEventListener("input", ({ target: a }) => { b(a) }) })


const checkIsEmpty = (e) => {
    return e.value ? { isValid: true, message: '' } : { isValid: false, message: e.name + ' tidak boleh kosong!' }
}

const validateAll = (e) => {
    const label = e.parentElement.querySelector('.validate');
    const result = checkIsEmpty(e);
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

// event handler
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input:not([type=submit])');

inputs.forEach(e => {
    e.addEventListener('input', (event) => {
        validateAll(event.target);
    });
})

// iki handle submit e bang 
form.addEventListener('submit', (event) => {
    const isCanSubmit = [...inputs].map(e => validateAll(e)).every(e => e === true);

    if (isCanSubmit) {
        openToast();
    } else {
        event.preventDefault();
    }
});



function closeToast() {
    let parent = document.querySelector('.toast-toggler').parentElement;
     parent.classList.remove('animate-fade');
     setTimeout(() => {
          parent.classList.add('animate-fade-reverse');
     }, 50)
     parent.onanimationend = () => parent.classList.add('hidden')
}

/*
function openToast() {
    let parent = document.querySelector('.toast-toggler').parentElement;
    parent.classList.remove('animate-fade-reverse');
    parent.classList.remove('hidden')
    parent.classList.add('flex')
    parent.classList.add('animate-fade');
} */

