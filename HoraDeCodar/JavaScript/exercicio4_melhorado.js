// 4) Considerando a figura abaixo, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável.

var formas = parseFloat(prompt("Escolha sua forma geométrica. 1: Retângulo | 2: Quadrado | 3: Triângulo | 4: Círculo | 5: Losango | 6: Trapézio | 7: Paralelogramo"))

var resultado;

var base;
var base_menor;
var base_maior;
var altura;
var diagonal_menor;
var diagonal_maior;
var lado;
var raio;



if (formas === 1) {

    base = parseFloat(prompt("Insira a Base de seu Retângulo: "))
    altura = parseFloat(prompt("Insira a Altura de seu Retângulo: "))

    resultado = base * altura

    alert("A área de seu Retângulo é: " + resultado)

}

else if (formas === 2) {

    lado = parseFloat(prompt("Insira o Lado de seu Quadrado: "))

    resultado = (lado * lado)

    alert("A área de seu Quadrado é: " + resultado)

}

else if (formas === 3) {

    base = parseFloat(prompt("Insira a Base de seu Triângulo: "))
    altura = parseFloat(prompt("Insira a Altura de seu Triângulo: "))

    resultado = (base * altura) / 2

    alert("A área de seu Triângulo é: " + resultado)

}

else if (formas === 4) {

    raio = parseFloat(prompt("Insira o Raio de seu Círculo: "))

    resultado = Math.PI * (raio * raio)

    alert("A área de seu Círculo é: " + resultado.toFixed(2))

}

else if (formas === 5) {

    diagonal_maior = parseFloat(prompt("Insira a Diagonal Maior de seu Losango: "))
    diagonal_menor = parseFloat(prompt("Insira a Diagonal Menor de seu Losango: "))

    resultado = (diagonal_maior * diagonal_menor) / 2

    alert("A área de seu Losango é: " + resultado)

}

else if (formas === 6) {

    base_maior = parseFloat(prompt("Insira a Base Maior de seu Trapézio: "))
    base_menor = parseFloat(prompt("Agora insira a Base Menor de seu Trapézio: "))
    altura = parseFloat(prompt("Insira a Altura de seu Trapézio: "))

    resultado = ((base_maior + base_menor) * altura) / 2

    alert("A área de seu Trapézio é: " + resultado)

}

else if (formas === 7) {

    base = parseFloat(prompt("Insira a Base de seu Paralelogramo: "))
    altura = parseFloat(prompt("Insira a Altura de seu Paralelogramo: "))

    resultado = base * altura

    alert("A área de seu Paralelogramo é: " + resultado)

}

else{

    alert("Você se esqueceu de digitar um número!")

}