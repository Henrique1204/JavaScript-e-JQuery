// Encapsular função
(function() {
    // Seleciona os elementos com o atributo data-anime='scroll'.
    let $targetanime = $("[data-anime='scroll']");
    // Define qual será a classe usada para as animações
    let animationClass = "animate";
    // Define onde a animação deve começar, o cálculo é feito atráves da altura da janela vezes 3/4, isso para a animação só aparecer depois de 3/4 da tela, independente do tamamnho da tela
    let offset = $(window).height() * 3 / 4;
    
    function animarScroll () {
        // Seleciona a distância atual da janela do topo do site
        let documentoTop = $(window).scrollTop();
        
        $targetanime.each(function () {
            // Pega a distância entre o item e o topo do site
            let itemTop = $(this).offset().top;
            
            if (documentoTop > itemTop - offset)
            {
                $(this).addClass(animationClass);
            }
            else
            {
                $(this).removeClass(animationClass);
            }
        });
    }

    animarScroll();
    $(document).scroll(debounce(animarScroll, 200));   
})();