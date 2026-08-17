const prompt = require('prompt-sync')();
// ============================================================
//  LISTA DE EXERCÍCIOS - JAVASCRIPT
// ============================================================
//  Instruções gerais:
//  - Resolva os exercícios na ordem, do mais fácil ao mais difícil
//  - Cada exercício tem uma explicação do que fazer
//  - Use console.log() para mostrar os resultados
//  - Para testar, abra o navegador e veja o console (F12)
//  - Tente fazer sozinho antes de pedir ajuda!
// ============================================================


// ============================================================
//  BLOCO 1 - VARIÁVEIS, TIPOS E OPERADORES
// ============================================================


// EXERCÍCIO 1 - Calculadora simples
// Crie 2 variáveis com números e mostre no console
// o resultado da soma, subtração, multiplicação e divisão.
// ------------------------------------------------------------
let numero1 = 10
let numero2 = 5

console.log("--- Veja agora as operações envolvendo os números", numero1, " e ", numero2, " ---")
console.log("A soma desses números é: ", numero1 + numero2)
console.log("A subtração desses números é: ", numero1 - numero2)
console.log("A multiplicação desses números é: ", numero1 * numero2)
console.log("A divisão desses números é: ", numero1 / numero2)


console.log("")
// EXERCÍCIO 2 - Conversor de temperatura
// Crie uma variável com um valor em Celsius.
// Converta para Fahrenheit e mostre no console.
// Fórmula: F = C * 9/5 + 32
// ------------------------------------------------------------
let Celsius = 26
let Fahrenheit = Celsius * 9/5 + 32
console.log(`Temperatura atual em Celsius: ${Celsius}ºC\nTemperatura atual em Fahrenheit: ${Fahrenheit}ºF`)
console.log("")
// EXERCÍCIO 3 - Par ou ímpar
// Crie uma variável com um número.
// Mostre no console se ele é par ou ímpar.
// Dica: use o operador % (resto da divisão)
// Se numero % 2 === 0, é par.
// ------------------------------------------------------------
let numPI = 10
if (numPI % 2 === 0) {
    console.log(`O número ${numPI} é par`)
} else {
    console.log(`O número ${numPI} é ímpar`)
}
console.log("")
// EXERCÍCIO 4 - Média de notas
// Crie 3 variáveis com notas (de 0 a 10).
// Calcule a média e mostre no console.
// Se a média for >= 7, mostre "Aprovado".
// Se não, mostre "Reprovado".
// ------------------------------------------------------------
let nota1 = 10
let nota2 = 5
let nota3 = 7
let conta = nota1 + nota2 + nota3 / 3
console.log(`As notas são: ${nota1}, ${nota2} e ${nota3}.\nA média das notas é: ${conta}`)
if (conta >= 7) {
    console.log("Aluno aprovado!")
} else {
    console.log("Aluno reprovado")
}
console.log("")
// ============================================================
//  BLOCO 2 - CONDICIONAIS (if/else, switch)
// ============================================================


// EXERCÍCIO 5 - Maior de idade
// Crie uma variável com uma idade.
// Se for >= 18, mostre "Maior de idade".
// Se não, mostre "Menor de idade".
// ------------------------------------------------------------
let idade = 15
if (idade >= 18) {
    console.log(`Você tem ${idade} anos: Maior de idade.`)
} else {
    console.log(`Você tem ${idade} anos: Menor de idade.`)
}
console.log("")
// EXERCÍCIO 6 - Calculadora de IMC
// Crie variáveis para peso (em kg) e altura (em metros).
// Calcule o IMC: peso / (altura * altura)
// Mostre a faixa no console:
//   Abaixo de 18.5 = "Abaixo do peso"
//   18.5 até 24.9  = "Peso normal"
//   25 até 29.9    = "Sobrepeso"
//   30 ou mais     = "Obesidade"
// ------------------------------------------------------------
let peso = 60
let altura = 1.76
let IMC = peso / (altura * altura)
if (IMC < 18.5) {
    console.log("Abaixo do peso")
} else if (IMC >= 18.5 && IMC <= 24.9){
    console.log("Peso normal")
} else if (IMC >= 25 && IMC <= 29.9) {
    console.log("Sobrepeso")
} else if (IMC >= 30) {
    console.log("Obesidade")
} else {
    console.log("AH morre, Diabo!")
}
console.log("")
// EXERCÍCIO 7 - Pedra, papel e tesoura
// Crie uma variável com sua jogada ("pedra", "papel" ou "tesoura").
// Faça o computador escolher aleatoriamente uma jogada.
// Dica para escolha aleatória:
//   let opcoes = ['pedra', 'papel', 'tesoura']
//   let computador = opcoes[Math.floor(Math.random() * 3)]
// Compare as jogadas e mostre quem ganhou.
// ------------------------------------------------------------
let opcoes = ['pedra', 'papel', 'tesoura']
let minha = "papel"
let computador = opcoes[Math.floor(Math.random() * 3)]

switch (minha, computador) {
    case 'pedra', 'pedra': console.log("Empate!")
    break
    case 'pedra', 'papel': console.log("Computador ganhou!")
    break
    case 'pedra', 'tesoura': console.log("Você ganhou!")
    break
    case 'papel', 'pedra': console.log("Você ganhou!")
    break
    case 'papel', 'papel': console.log("Empate!")
    break
    case 'papel', 'tesoura': console.log("Computador ganhou!")
    break
    case 'tesoura', 'pedra': console.log("Computador ganhou!")
    break
    case 'tesoura', 'papel': console.log("Você ganhou!")
    break
    case 'tesoura', 'tesoura': console.log("Empate!")
    break
}
console.log("")
// EXERCÍCIO 8 - Sistema de notas
// Crie uma variável com uma nota de 0 a 10.
// Use if/else para mostrar o conceito:
//   10 e 9   = "A"
//   8 e 7    = "B"
//   6 e 5    = "C"
//   4 e 3    = "D"
//   2, 1, 0  = "F"
// ------------------------------------------------------------
let nota = 10
if (nota === 10 || nota === 9) {
    console.log("Nota A")
} else if (nota === 8 || nota === 7) {
    console.log("Nota B")
} else if (nota === 6 || nota === 5) {
    console.log("Nota C")
} else if (nota === 4 || nota === 3) {
    console.log("Nota D")
} else if (nota <= 2) {
    console.log("Nota F")
}
console.log("")
// ============================================================
//  BLOCO 3 - LOOPS (for, while)
// ============================================================


// EXERCÍCIO 9 - Tabuada
// Crie uma variável com um número.
// Use um for para mostrar a tabuada desse número (de 1 a 10).
// Exemplo para o número 5:
//   "5 x 1 = 5"
//   "5 x 2 = 10"
//   ... até "5 x 10 = 50"
// ------------------------------------------------------------
let num = 10
for (let i = 1; i <= 10; i++) {
    console.log(num * i)
}
console.log("")
// EXERCÍCIO 10 - Contagem regressiva
// Use um for para contar de 10 até 0.
// Mostre cada número no console.
// No final, mostre "Feliz Ano Novo!" (ou qualquer mensagem).
// ------------------------------------------------------------
for (i = 10; i >= 0; i--) {
    console.log(i)
}
console.log("SIX SEVEEEEEEEEEEEENNNNNNN")
console.log("")
// EXERCÍCIO 11 - Somar números
// Crie uma variável N com um número qualquer.
// Use um for para somar todos os números de 1 até N.
// Mostre o resultado no console.
// Exemplo: se N = 5, resultado = 1+2+3+4+5 = 15
// ------------------------------------------------------------
let N = 5
let soma = 0
for (let i = 1; i <= N; i++) {
    soma += i
}
console.log(soma)
console.log("")
// EXERCÍCIO 12 - Adivinhe o número
// O computador escolhe um número aleatório de 1 a 10:
//   let secreto = Math.floor(Math.random() * 10) + 1
// Use um while para o usuário tentar adivinhar.
// A cada tentativa, diga se o palpite é "maior" ou "menor".
// Quando acertar, mostre "Parabéns! Acertou!"
// Dica: use prompt() para pedir o palpite do usuário.
// ------------------------------------------------------------
let secreto = Math.floor(Math.random() * 10) + 1
let resposta
while (resposta != secreto) {
    resposta = Number(prompt("Tente acertar o número: "))
    if (resposta > secreto) {
        console.log("Seu palpite é maior que o número secreto!")
    } else if (resposta < secreto) {
        console.log("Seu palpite é menor que o número secreto!")
    }
} console.log("Parabéns!!! Você acertou o número!")
console.log("")
// ============================================================
//  BLOCO 4 - FUNÇÕES
// ============================================================


// EXERCÍCIO 13 - Função de saudação
// Crie uma função chamada "saudacao" que recebe um nome
// e retorna "Olá, [nome]!"
// Chame a função e mostre o resultado no console.
// Exemplo: saudacao("Maria") retorna "Olá, Maria!"
// ------------------------------------------------------------
function saudacao (nome) {
    let nome13 = prompt("Digite seu nome: ")
    console.log(`Olá ${nome13}`)
}
saudacao()
console.log("")
// EXERCÍCIO 14 - Número primo
// Crie uma função chamada "ehPrimo" que recebe um número
// e retorna true se for primo, false se não for.
// Número primo: só é divisível por 1 e por ele mesmo.
// Dica: use um for de 2 até numero-1 e verifique se
// algum divide o número sem resto (numero % i === 0).
// ------------------------------------------------------------
function ehPrimo (num14) {
    if (num14 <= 1) {
        return false;
    }
    for (let i = 2; i < num14; i++) {
        if (num14 % i === 0) {
            return false
        }
    }
    return console.log("Seu número é Primo!")
}
ehPrimo(7)
console.log("")
// EXERCÍCIO 15 - Inverter string
// Crie uma função chamada "inverter" que recebe uma string
// e retorna ela invertida.
// Exemplo: inverter("javascript") retorna "tpircsavaj"
// Dica: use split('') para virar o array, reverse() para
// inverter, e join('') para voltar a ser string.
// ------------------------------------------------------------
function inverter (string) {
    console.log(string.split('').reverse().join(''))
}
inverter("JavaScript")

console.log("")
// EXERCÍCIO 16 - Contar vogais
// Crie uma função chamada "contarVogais" que recebe uma
// palavra e retorna quantas vogais ela tem.
// Exemplo: contarVogais("javascript") retorna 3
// Dica: transforme em minúscula com .toLowerCase()
// e verifique cada letra com um for.
// ------------------------------------------------------------
function contarVogais (palavra) {
    let contador = 0
    let palavraMo = palavra.toLowerCase()
    for (let i = 0; i < palavraMo.length; i++) {
        let letra = palavraMo[i]
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            contador++;
        }
    } 
    return contador
}
console.log(contarVogais("Pedro"))
console.log("")
// ============================================================
//  BLOCO 5 - ARRAYS
// ============================================================


// EXERCÍCIO 17 - Lista de compras
// Crie um array vazio chamado "listaCompras".
// Adicione 5 itens usando push().
// Mostre a lista no console.
// Remova o último item com pop() e mostre a lista novamente.
// ------------------------------------------------------------
let listaCompras = []

listaCompras.push("Maçã")
listaCompras.push("Banana")
listaCompras.push("Laranja")
listaCompras.push("Pera")
listaCompras.push("Abacaxi")

console.log(listaCompras)

listaCompras.pop()

console.log(listaCompras)

console.log("")
// EXERCÍCIO 18 - Maior e menor
// Crie um array com 8 números diferentes.
// Encontre o maior e o menor número do array.
// Mostre os dois no console.
// Dica: use Math.max(...array) e Math.min(...array)
// Ou tente fazer com um for (mais desafiador!).
// ------------------------------------------------------------
let numeros = [10, 5, 18, 20, 9, 15, 16, 14]

let maiorNum = Math.max(...numeros)
let menorNum = Math.max(...numeros)

console.log("O maior número é o ", maiorNum, " e o menor é o ", menorNum)
console.log("")
// EXERCÍCIO 19 - Ordenar nomes
// Crie um array com 6 nomes de pessoas.
// Ordene em ordem alfabética e mostre no console.
// Depois ordene ao contrário (Z até A) e mostre também.
// Dica: use .sort() e .reverse()
// ------------------------------------------------------------




// EXERCÍCIO 20 - Filtrar pares
// Crie um array com os números de 1 a 20.
// Filtre apenas os números pares e guarde num novo array.
// Mostre o array de pares no console.
// Dica: use .filter(function(numero) { return numero % 2 === 0 })
// ------------------------------------------------------------




// ============================================================
//  BLOCO 6 - DOM (Manipulação da página)
// ============================================================
//  Para esses exercícios, você vai precisar criar elementos
//  no HTML ou usar o index.html que já existe.
//  Peça ajuda ao professor se precisar do HTML!
// ============================================================


// EXERCÍCIO 21 - Mudar cor de fundo
// Crie 3 botões no HTML (Vermelho, Azul, Verde).
// Ao clicar em cada botão, mudar a cor de fundo da página.
// Dica: document.body.style.backgroundColor = 'red'
// ------------------------------------------------------------




// EXERCÍCIO 22 - Contador
// Crie no HTML: um <h1> com o número 0, e dois botões (+ e -).
// Ao clicar em "+", o número aumenta 1.
// Ao clicar em "-", o número diminui 1.
// Dica: use uma variável para guardar o valor do contador
// e atualize o textContent do <h1> a cada clique.
// ------------------------------------------------------------




// EXERCÍCIO 23 - Mostrar e esconder
// Crie no HTML: um botão "Mostrar/Esconder" e um <div> com
// um texto qualquer dentro.
// Ao clicar no botão, o <div> deve aparecer/desaparecer.
// Dica: use classList.toggle() com uma classe CSS que tenha
// display: none
// ------------------------------------------------------------




// EXERCÍCIO 24 - Lista de tarefas
// Esse exercício é a atividade principal!
// Abra o arquivo script.js da atividade e complete os níveis.
// ------------------------------------------------------------


// ============================================================
//  BLOCO 7 - DOM + LÓGICA COMBINADA (Desafio!)
// ============================================================


// EXERCÍCIO 25 - Cronômetro
// Crie no HTML: um <h1> mostrando "00:00" e 3 botões
// (Iniciar, Pausar, Resetar).
// O cronômetro deve contar segundos e minutos.
// Dica: use setInterval() para contar e clearInterval() para pausar.
// ------------------------------------------------------------




// EXERCÍCIO 26 - Quiz de perguntas
// Crie um quiz com 5 perguntas de múltipla escolha.
// Mostre uma pergunta por vez na página.
// No final, mostre a pontuação (ex: "Você acertou 3 de 5").
// Dica: guarde as perguntas num array de objetos:
//   { pergunta: "...", opcoes: ["a", "b", "c"], correta: 1 }
// ------------------------------------------------------------




// EXERCÍCIO 27 - Gerador de senha
// Crie no HTML: um campo para o tamanho da senha,
// checkboxes para (maiúsculas, números, símbolos)
// e um botão "Gerar".
// Ao clicar, gerar uma senha aleatória e mostrar na tela.
// Dica: crie uma string com os caracteres possíveis e use
// Math.random() para escolher caracteres aleatórios.
// ------------------------------------------------------------




// EXERCÍCIO 28 - Galeria de imagens
// Crie no HTML: uma <img> grande e dois botões (Anterior, Próximo).
// Crie um array com URLs de imagens.
// Ao clicar nos botões, trocar a imagem mostrada.
// Dica: mude o atributo src da <img> com JavaScript.
// ------------------------------------------------------------


