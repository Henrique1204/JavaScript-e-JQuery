let classe = $("div").attr("class");
console.log(classe);

$("div").attr("class", "vermelho");

$("#nome").on("change", ()=> {
    console.log($("#nome").val()); // .val("conteudo") -- adiciona o conteúdo do parâmetro ao value do elemento
});

$("p").remove(); // Remove o elemento selecionado
// .empty() -- Remove todos os elementos filhos do elemento selecionado