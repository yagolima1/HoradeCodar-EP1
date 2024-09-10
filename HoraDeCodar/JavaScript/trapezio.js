// 4) Considerando a figura abaixo, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável.

var base_maior = prompt ("Insira a base maior do seu trapézio: ")
var base_menor = prompt ("Agora insira a base menor do seu trapézio: ")
var altura = prompt ("Por fim, insira a altura de seu trapézio: ")
var area = ((base_maior+base_menor) *altura) / 2
alert ("A área de seu trapézio é: " + area)