// Isso seleciona todos os elementos com a propriedade data-group e gera uma array que é precorrido pelo eachs
$("[data-group]").each(function() {
    // Pega todos os elementos com tem o  atributo data-target
    let $targets = $(this).find("[data-target]");
    // Isso garante que o primeiro elemento vai estar ativo para o site não ficar vazio
    $targets.first().addClass("active");

    // Seleciona os botões pelo atributo data-click
    let $clicks = $(this).find("[data-click]");
    $clicks.first().addClass("active");

    $($clicks).click(function(e) {
        // Bloqueia o evento padrão do elemento
        e.preventDefault();

        $clicks.removeClass("active");
        $targets.removeClass("active");

        let id = $(this).data("click");
        let $target = $(`[data-target="${id}"`);

        $target.addClass("active");
        $(this).addClass("active");
    })
});