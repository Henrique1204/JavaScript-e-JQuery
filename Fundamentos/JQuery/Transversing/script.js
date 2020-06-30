// .closest("elemento") -- buscar o elemento mais próximo acima do elemento selecionado na árvore do dom
// .parent() -- mexe no elemento pai
// .parents() -- pega todos os elementos pais
// .find("p") -- busca os filhos
// .not("parametro") -- ignora o elemento que atende ao parâmetro na hora de selecionar
let cliques = 0;

$("div").each(function() {
    $(this).click(function(){
        $(this).parent().css("background-color", `${(cliques % 2 == 0) ? "#E00" : "#151515"}`);
        cliques++;
    });
});

$("p").first().css("background-color", "#00E");
$("p").last().css("background-color", "#0E0");
$("p").first().prev().css("background-color", "#0E0");
$("div").first().next().css("background-color", "#0E0");
$("div").eq(2).css("background-color", "#00E");