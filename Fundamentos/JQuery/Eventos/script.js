const $vermelho = $("#div1");
const $azul = $("#div2");
const $h1 = $("h1");
let texto;

$vermelho.click( ()=> {
    $h1.text("Azul");
    $vermelho.hide("slow");
    $azul.show("slow");
});

$azul.on("mouseleave", ()=> {
    $h1.text("Vermelho");
    $azul.hide("slow");
    $vermelho.show("slow");
});

$h1.on("click", function(e) {
    e.preventDefault();
    texto = $(this).text();
    $(this).text("Sou uma legenda");
});

$h1.on("mouseout", function(e){
    e.preventDefault();
    $(this).text(texto);
});

$(document).on("scroll", ()=> {
    let cor = ($(this).scrollTop() <= 21) ? 21 : $(this).scrollTop();
    $("body").css("background-color", `rgba(${cor}, ${cor}, ${cor})`);
});