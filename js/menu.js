const menuEl = document.querySelector('#menu');
const submenuEl = document.querySelector('#submenu');

menuEl.addEventListener('click', () => {
    submenuEl.classList.toggle('ativo');
    if (submenuEl.className == 'ativo')
        document.documentElement.style.overflow = 'hidden';
    else
        document.documentElement.style.overflow = 'auto';
});