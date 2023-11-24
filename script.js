let botao = document.querySelector('#botao');
let opcoes = document.querySelector('#opcoes')

botao.addEventListener('click', () => {
    opcoes.style.visibility = 'visible';
    opcoes.style.height = 'auto';
    opcoes.style.listStyle = 'none';
    opcoes.style.display = 'flex';
    opcoes.style.gap = '1.5rem';
    opcoes.style.fontSize = '1.5rem'
})