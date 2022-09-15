function closeToast() {
    let parent = document.querySelector('.toast-toggler').parentElement;
     parent.classList.remove('animate-fade');
     setTimeout(() => {
          parent.classList.add('animate-fade-reverse');
     }, 50)
     parent.onanimationend = () => parent.classList.add('hidden')
}


function openToast() {
    let parent = document.querySelector('.toast-toggler').parentElement;
    parent.classList.remove('animate-fade-reverse');
    parent.classList.remove('hidden')
    parent.classList.add('animate-fade');
} 