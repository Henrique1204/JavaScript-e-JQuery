let familia = ["Pai", "Mãe", "Filho", "Neto", "Bisneto"];

// Retorna o primeiro valor do array
console.log(familia[0]);

// Adicionar um novo valor ao array
familia.push("Cunhado");

// length retorna o tamanho do array
let ultimo = familia.length - 1;
console.log(familia[ultimo]);

// Busca o número do índice pelo valor
console.log(familia.indexOf("Mãe"));

// Remove o item, primeiro parâmetro é por onde vai começar, o segundo é quantos irão ser removidos, caso não passe o segundo parâmetro ele remove todos após o começo
familia.splice(familia.indexOf("Neto"), 1);
console.log(familia);