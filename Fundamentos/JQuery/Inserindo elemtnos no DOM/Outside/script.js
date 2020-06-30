$("p").after("<span>*o*</span>"); // adicionar conteúdo depois do elemento
$("<span>*o*</span>").insertAfter("h1"); // inverte a ordem do .after()
// .before() / .insertBefore() -- faz o mesmo acima, porém antes do elemento

$("p").wrap("<div></div>"); // Adicionar o elemento selecionando dentro do conteúdo passado no parâmetro
$("p").unwrap(); // remove o elemento de dentro do elemento pai