// "Paulo" = string | 18 = number | true = boolean | pessoa = object | familia = Array
let pessoa = {nome: "Paulo", idade: 18, vivo: true};
console.log(`${pessoa.nome} tem ${pessoa.idade} e está ${ (pessoa.vivo) ? "vivo" : "morto" }.`);

let numeros = {x: 25, y: 10};
console.log(`${ (numeros.x * numeros.x) / numeros.y + numeros.x }`);

let familia = [{parentesco: "Pai", nome: "Elino", idade: 77, vivo: true}, {parentesco: "Mãe", nome: "Maria", idade: 60, vivo: true}, {parentesco: "Filho", nome: "Paulo", idade: 18, vivo: true}];

for(let parente of familia)
{
    console.log(`Parentesco: ${parente.parentesco}, Nome: ${parente.nome}, Idade: ${parente.idade}, ${ (parente.vivo) ? "Vivo" : "Morto" }`);
}