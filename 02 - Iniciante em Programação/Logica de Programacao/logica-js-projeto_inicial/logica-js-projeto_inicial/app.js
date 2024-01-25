alert('Boas vindas ao jogo do número secreto!'); //Exibe uma mensagem de alerta na tela
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);  //Define uma variavel e atribui um valor aleatorio entre 1 e 100 a ela
console.log(numeroSecreto); //Exibe o número secreto no console
let chute //Declara a variavel onde sera aramazenado o valor do chute
let tentativas = 1;
// Enquanto o chute for diferente do número secreto o jogo continua
while (chute != numeroSecreto) {
    chute = prompt(`Escola um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao numero secreto:
    if (chute == numeroSecreto) { // Compara se duas variaveis possuem o mesmo valor
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}!`);
        } else {
            alert(`O número secreto é maior que ${chute}!`);
        }
        tentativas++;
    } // Exibe uma mensagem de alerta na tela se a condição for falsa
}

//if (tentativas == 1) {
    //alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
//} else {
    //alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
//}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //Operador ternario

alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`); //Exibe uma mensagem no console se a condição for verdadeira informando o número secreto