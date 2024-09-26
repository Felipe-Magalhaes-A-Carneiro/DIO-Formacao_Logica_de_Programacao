let numero = 10;

// Operadores Aritméticos:
/* 
 '+' = Adição 
 '-' = Subtração
 '*' = Multiplicação
 '/' = Divisão
 '%' = Módulo (resto da divisão)
*/
let adicao = numero + 5;
let subtracao = numero - 5;
let multiplicacao = numero * 5;
let divisao = numero / 5;
let modulo = numero % 5;

console.log("Resultados dos Operadores Aritméticos: " + adicao, subtracao, multiplicacao, divisao, modulo);

// Operadores Relacionais:
/*
 '==' = Igual a
 '!=' = Diferente de
 '>' = Maior que
 '<' = Menor que
 '>=' = Maior ou igual a
 '<=' = Menor ou igual a
*/

let igual = numero == 10;
let diferente = numero != 5;
let maior = numero > 5;
let menor = numero < 20;
let maiorIgual = numero >= 10;
let menorIgual = numero <= 20;


console.log("Resultados dos Operadores Relacionais: " + igual, diferente, maior, menor, maiorIgual, menorIgual)

// Operadores Lógicos:
/*
 '&&' = AND lógico
 '||' = OR lógico
 '!' = NOT lógico (será feito um exemplo prático em outro arquivo)
*/

let and = numero && igual;
let or = numero || igual;


console.log("Resultados dos Operadores Lógicos: " + and, or);

// Operadores de Atribuição:
/*
 '=' = Atribuição
 '+=' = Adição atribuição
 '-=' = Subtração atribuição
 '*=' = Multiplicação atribuição
 '/=' = Divisão atribuição
 '%=' = Módulo atribuição
*/