// Seleciona os links
$("[data-menu] a[href^='#']").click(function(e) {
	// previne o evento padrão do a
	e.preventDefault();

	// seleciona a altura do header
	let altHeader = $("header").height();

	// seleciona o id da section onde quer ir
	let $id = $(this).attr("href");
	// seleciona a distância entre o top e section onde quer ir considerando o header
	let distancia =	$($id).offset().top - altHeader;

	// Faz a animação do scroll, é utilizado o html e o body por questão de otimização
	$("html, body").animate({
		scrollTop: distancia
	}, 500);
})

// Seleiona o logo
$(".logo").click(function(e) {
	// previne o evento padrão do a
	e.preventDefault();

	// Faz animação para voltar ao topo da página
	$("html, body").animate({
		scrollTop: 0
	}, 500);
});