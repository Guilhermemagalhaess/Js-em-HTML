let numeroSecreto = 7;gerarNumeroAleatorio()
let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTextoNaTela(tag, texto)   {
   let campo = document.querySelector (tag);
campo.innerHTML = texto;
 
}

exibirTextoNaTela ('h1', 'Jogo do número secreto');
exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
exibirTextoNaTela('h1', 'Acertou!');
exibirTextoNaTela('p', 'VocÊ descobriu o número numeroSecreto.');
  
    } else{
      if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O NÚMERO SECRETO É MENOR');

      } else {
        exibirTextoNaTela ('P', 'o NÚMERO SECRETO É MAIOR');
      }
    }
          
}

function gerarNumeroAleatorio(){
return parseInt(Math.random () * 10 + 1);

}
