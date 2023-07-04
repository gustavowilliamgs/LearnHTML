const btnVerCursoEl = document.querySelector('#btn-ver-curso');
const btnFazerCursoEl = document.querySelector('#btn-fazer-curso');
const iconEl = document.head.querySelector(`link[rel="shortcut icon"]`);
const tituloEl = document.title;

window.addEventListener('blur', () => {
    document.title = "LearnCSS";
    iconEl.href = "../img/favicon-css.ico";
});

window.addEventListener('focus', () => {
    document.title = tituloEl;
    iconEl.href = "../img/favicon.ico";
});


btnVerCursoEl.addEventListener('click', () => {
    window.location.href = '#btn-fazer-curso';
});

btnFazerCursoEl.addEventListener('click', () => {
    window.location.href = './html/aula-1.html';
});