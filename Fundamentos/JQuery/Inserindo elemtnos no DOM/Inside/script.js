let $h1 = $("h1");

// .append() -- Adicionar o o conteúdo do parâmetro ao elemento selecionando
// .append() insere depois / .prepend() insere antes
$("body").append("<div></div>");
$h1.append(" Texto do SCRIPT");
$("div").append($h1);
//.appendTo() -- inverte onde o elemento será adicionado
$("h1").appendTo("body");

// .html() -- Pega o valor dentro do html, caso tenha mais de um objeto selecionado ele pega só do primeiro
console.log($h1.html());
// .html("Conteúdo") -- Se passar um valor ele substitui o conteúdo de todos os elementos selecionados pelo parâmetro
$h1.html("Teste");

// .text() -- pega todos os valores dos elementos selecionados e junta tudo em uma string só
let texto = $h1.text();
console.log(texto);
// .text("conteúdo") -- Escreve o conteúdo dentro do objeto selecionado, ele não renderiza tags html
$h1.text("<p>Texto</p>");