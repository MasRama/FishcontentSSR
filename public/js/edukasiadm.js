
class Dropdown {
    constructor(el) {
        this.element = document.querySelectorAll(`.${el}`);
        this.element.forEach(e => {
            const toggler = e.parentElement.querySelector(`#${e.getAttribute('aria-controls')}`);
            toggler.addEventListener('click', ev => {
                this.showDD(ev.target.parentElement , e)
            });
            toggler.addEventListener('blur', ev => {
                this.hideDD(ev.target.parentElement, e)
            })
        })
        
    }

    showDD = (t , e) => {
        e.classList.toggle('invisible')
        t.setAttribute('aria-expanded', !e.classList.contains('invisible'));
    }
    hideDD = (t,e) => {
        e.classList.add('invisible')
        t.setAttribute('aria-expanded', false);
    }
}


const dd1 = new Dropdown('dropdown')



