const a = a => a.value ? { isValid: !0, message: "" } : { isValid: !1, message: a.name + " tidak boleh kosong!" },b = b => { const c = b.parentElement.querySelector(".validate"), d = a(b); return c.innerHTML = d.message, d.isValid ? (c.classList.add("hidden"), b.classList.remove("input--invalid")) : (c.classList.remove("hidden"), b.classList.add("input--invalid")), d.isValid }, c = document.querySelector("form"), d = c.querySelectorAll("input:not([type=submit])"), e = document.querySelector("input[type=password]"), f = e.nextElementSibling; f.addEventListener("click", a => { a.preventDefault(), f.classList.toggle("expanded"), e.type = f.classList.contains("expanded") ? "text" : "password" }), d.forEach(a => { a.addEventListener("input", ({ target: a }) => { b(a) }) })


function closeToast() {
     let parent = document.querySelector('.toast-toggler').parentElement;
     parent.classList.add('animate-fade-reverse');
     parent.onanimationend = () => parent.classList.add('hidden')
 }

