const menuEl = document.querySelector('#menu');
const submenuEl = document.querySelector('#submenu');

menuEl.addEventListener('click', () => {
    submenuEl.classList.toggle('ativo');
});