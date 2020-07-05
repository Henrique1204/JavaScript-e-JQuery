// Debounce do Lodash
debounce = function(func, wait, immediate) {
	let timeout;
	return function() {
		let context = this, args = arguments;
		let later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Função do slide
function slider(slideName, tempo) {
	// Formata o classe na qual será aplicado o slide apartir do slideName
	let slideClass = `.${slideName}`;
	// Define a classe que será aplicada para diferenciar o slide de ativado do desativado
	let activeClass = "active";
	// Variável de controle para usar no evento de mouse hover
	let rotacao = 	setInterval(rodarSlide, tempo);

	// Garante que o primeiro elemento sempre esteja ativado para o site não ficar vazio
	$(`${slideClass} > :first`).addClass(activeClass);

	// Função para parar o slide quando colocar o mouse em cima
	$(slideClass).hover(function() {
		// Limpa o intervalo da função rodarSlide
		clearInterval(rotacao);
	}, function() {
		// Reinicia o intervalo da rotação das fotos do slide
		rotacao = 	setInterval(rodarSlide, tempo);
	});

	// Faz a passagem do slide funcionar
	function rodarSlide() {
		// Seleciona o ativo slide que está ativo atualmente
		let activeSlide = $(`${slideClass} > .${activeClass}`);
		// Seleciona o próximo slide
		let nextSlide = activeSlide.next();

		// Testa se chegou no último slide
		if (nextSlide.length == 0)
		{
			// Faz voltar para o primeiro
			nextSlide = $(`${slideClass} > :first`);
		}

		// Remove a classe do slide atual
		activeSlide.removeClass(activeClass);
		// Adicionar a classe no próximo slide
		nextSlide.addClass(activeClass);
	}
}

// Chama a função do slide
slider("introducao", 2000);