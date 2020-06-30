// .toggleClass() -- Checa se o elemento já tem a classe, caso não tenha, adiciona, caso tenho remove
// hasClass("classe") -- Checa se o elemento possui a classe passada no parâmetro
let $div = $("div");
let classes = ["branco", "vermelho", "verde", "azul"];
let contaClique = 0;

$div.on("click", ()=> {
    contaClique = (contaClique < (classes.length - 1)) ? contaClique + 1 : 0;

    $div.removeClass();
    $div.addClass(classes[contaClique]);
});