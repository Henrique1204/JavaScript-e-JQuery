// Existem abreviações para operações que alteram o valor da variável apartir do valor da variável
// x = x + 1; | x += 1; | x = x - 1; | x -= 1; | x = x * 2; | x *= 2; | x = x / 2; | x /= 2;
// Existem abreviações para incrementos e decrementos de variáveis quando o valor for 1
// X = x + 1; | x += 1; | x++; | x = x - 1; | x -= 1; | x--;

function calcular(x = 0, y = 0, operacao = "soma")
{
    switch (operacao)
    {
        case "soma": return x + y;
        case "sub": return x - y;
        case "mult": return x * y;
        case "divi": return x / y;
        default: return "Opção inválida";
    }
}

console.log(`Soma: ${calcular(20, 30, "soma")}`);
console.log(`Subtração: ${calcular(20, 30, "sub")}`);
console.log(`Multiplicação: ${calcular(20, 30, "mult")}`);
console.log(`Divisão: ${calcular(20, 30, "divi")}`);
console.log(`Vazio: ${calcular()}`);
console.log(`Erro: ${calcular(20, 30, "erro")}`);

//Operadores de comparação retornam valores booleanos
console.log(20 == '20'); // compara os valores sem considerar o tipo
console.log(20 === '20'); // compara os valores considerando o tipo
console.log(20 != 20); // compara os valores sem considerar o tipo e inverte o valor booleano da resposta
console.log(20 !== '20'); // compara os valores considerando o tipo e inverte o valor booleano da resposta
console.log(20 > 10); // compara se um valor é maior que o outro
console.log(20 < 10); // compara se um valor é menor que o outro
console.log(20 >= 10); // compara se um valor é maior ou igual que o outro
console.log(20<= 10); // compara se um valor é menor ou igual que o outro

//Operador ternário atribui um valor de acordo com uma resposta booleana
console.log( (20 == 20) ? "igual" : "não é igual");

//Operadores lógicos
// V && V = V | V && F = F | F && V = F | F && F = F
// V || V = V | V || F = V | F || V = V | F || F = F
// !V = F | !F = V