alert('Boas vindas ao nosso site!');

let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert('Erro! Preencha todos os campos');
let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);
nome = prompt('Qual o nome do usuário?');
idade = prompt('Qual a idade do usuário?');
if (idade >= 18) {
    alert('Pode tirar a habilitação!');
}