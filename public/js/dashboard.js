const sidebar = document.querySelector('.sidebar');
const sidebarToggler = document.querySelector('.sidebar__toggler');
const overlay = document.querySelector('.overlay');

const openSdbar = () => {
    sidebar.classList.toggle('translate-x-0');
    sidebar.previousElementSibling.classList.toggle('hidden')
}
sidebarToggler.onclick = () => {
    openSdbar();
}

overlay.onclick = () => {
    openSdbar();
}