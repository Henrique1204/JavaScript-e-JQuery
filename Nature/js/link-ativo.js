$("[data-group]").each(function() {
    let sessao = $(this);
    // Pega altura da section
    let altura = sessao.outerHeight();
    // Pega a altura do header
    let alturaHeader = $("header").height();
    // Pega a distância entre a section e topo
    let distanciaTopo = sessao.offset().top;
    
    // Função que executa quando acontece o evento scroll na janela
    $(window).scroll(debounce(() => {
        // Seleciona o id da section
        let $id = sessao.attr("id");
        // Seleciona o linl que tem o href equivalente ao id
        let linkMenu = $(`.menu nav a[href='#${$id}']`);
        
        // Calcula o local atual levando em conta o header, isso para o efeito ser aplicado quando o final do header encostar na section, soma mais um para corrigir o decimal
        let localAtual = $(window).scrollTop() + alturaHeader + 1;
        // Calcula todo o espaço onde o link deverá ser ativo, para isso usamos a localização onde a section começa e soma o tamanho dela
        let localFinal = distanciaTopo + altura - alturaHeader;
        
        if (localAtual >= distanciaTopo && localAtual <= localFinal)
        {
            linkMenu.addClass("active");
        }
        else 
        {
            linkMenu.removeClass("active");
        }
    }, 200));
});