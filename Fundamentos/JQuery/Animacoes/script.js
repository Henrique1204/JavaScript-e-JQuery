// .slideUp() / .slideDown() / .slideToggle()
let cliques = 0;

$("div").on("click", function() {
    $(this).animate({
        height: `${(cliques % 2 == 0 ) ? "500px" : "200px"}`,
        width: `${(cliques % 2 == 0 ) ? "500px" : "200px"}`
    }, 2000, "swing"); // swing -- lento rápido lento | linear -- mesma velocidade o tempo todo

    $(this).fadeOut();
    $(this).fadeIn(2000);
    cliques++;
});