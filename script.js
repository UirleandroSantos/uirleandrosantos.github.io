
let teste = document.querySelector('#teste');
let botaoOpen = document.querySelector('#botaoOpen');
let botaoClose = document.querySelector('#botaoClose');
let opcoes = document.querySelector('#opcoes');

botaoOpen.addEventListener('click', () => {
    opcoes.style.visibility = 'visible';
    opcoes.style.height = 'auto';
    opcoes.style.listStyle = 'none';
    opcoes.style.display = 'flex';
    opcoes.style.gap = '1.5rem';
    opcoes.style.fontSize = '1.5rem';

    botaoOpen.style.visibility = 'hidden';
    botaoOpen.style.height = '0';
    botaoOpen.style.width = '0'

    botaoClose.style.visibility = 'visible';
    botaoClose.style.height = 'auto';
    botaoClose.style.width = 'auto'
})

botaoClose.addEventListener('click', () => {
    opcoes.style.visibility = 'hidden';
    opcoes.style.height = '0';
    opcoes.style.width = '0'

    botaoOpen.style.visibility = 'visible';
    botaoOpen.style.height = 'auto';
    botaoOpen.style.width = 'auto'

    botaoClose.style.visibility = 'hidden';
    botaoClose.style.height = '0';
    botaoClose.style.width = '0';
});


function searchInput(inputValue){
    let input = inputValue.toLowerCase();
    let x = document.querySelectorAll(".card");

    for(let i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = 'none'
        }else{
            x[i].style.display = ''
        }
    }
}