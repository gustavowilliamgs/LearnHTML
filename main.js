const btnVerCursoEl = document.querySelector('#btn-ver-curso');
const btnFazerCursoEl = document.querySelector('#btn-fazer-curso');
const tituloEl = document.title;

window.addEventListener('blur', () => {
    document.title = "Learn CSS"
});

window.addEventListener('focus', () => {
    document.title = tituloEl;
});

btnVerCursoEl.addEventListener('click', () => {
    window.location.href = '#btn-fazer-curso';
});

btnFazerCursoEl.addEventListener('click', () => {
    window.location.href = './aulas/aula-1.html';
});