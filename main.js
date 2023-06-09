const btnVerCursoEl = document.querySelector('#btn-ver-curso');
const menuEl = document.querySelector('#menu');
const submenuEl = document.querySelector('#submenu');

btnVerCursoEl.addEventListener('click', () => {
    window.location.href = '#btn-fazer-curso';
});

menuEl.addEventListener('click', () => {
    submenuEl.classList.toggle('ativo');
});