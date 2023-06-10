const btnVerCursoEl = document.querySelector('#btn-ver-curso');
const btnFazerCursoEl = document.querySelector('#btn-fazer-curso');

btnVerCursoEl.addEventListener('click', () => {
    window.location.href = '#btn-fazer-curso';
});

btnFazerCursoEl.addEventListener('click', () => {
    window.location.href = './aulas/aula-1.html';
});