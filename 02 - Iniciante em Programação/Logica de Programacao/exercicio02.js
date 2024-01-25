// Cumprimento da Semana:
let diaDaSemana = prompt("Digite o dia da semana: ");
if (diaDaSemana === "Sabado") {
    console.log("Bom fim de semana!");
} else if (diaDaSemana === "Domingo") {
    console.log("Bom fim de semana!");
} else {
    console.log("Boa semana!");
}

// Numero positivo ou negativo:
let numero = prompt("Digite um número: ");
if (numero > 0) {
    alert("Número positivo");
} else {
    alert("Número negativo");
}

// Pontuação de Jogo:
let pontuacao = prompt("Digite a pontuação do jogo: ");
if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar!");
}

// Saldo da Conta:
let saldoDaConta = 100;
alert(`Seu saldo é de R$ ${saldoDaConta}`);

// Boas vindas personalizadas:
let nome = prompt("Digite seu nome: ");
alert(`Olá, ${nome}! Seja bem vindo(a)!`);