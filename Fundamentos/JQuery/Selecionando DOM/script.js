// hide() - esconde o elemento
let $p1 = $(".p1");
$p1.hide();

//$("ul li a").hide();
//$("ul li, .p2").hide();
$("a[href^='#']").hide();

// Verificar se o elemento existe
if ($p1.length)
{
    console.log("Existe");
}