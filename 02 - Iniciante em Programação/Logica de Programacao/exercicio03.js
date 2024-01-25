//Contador com exibição de valores - inicia com 1 e termina com 10:
let soma = 1;
let contador = 10;

while (soma <= contador) {
    console.log(soma);
    soma++;
}

// Contador com exibição de valores - inicia com 10 e termina com 0:
let soma2 = 10;
let contador2 = 0;

while (soma2 >= contador2) {
    console.log(soma2);
    soma2--;
}

// Contagem Regressiva:
let valor = prompt('Digite um numero:');
let final = 0;

while (valor >= final) {
    console.log(valor);
    valor--;
}

// Contagem Progressiva:
let fim = prompt('Digite um numero:');
let inicio = 0;

while (inicio <= fim) {
    console.log(inicio);
    inicio++;
}