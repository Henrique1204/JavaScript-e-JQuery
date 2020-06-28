let pessoa = {
    nome: "Paulo",
    profissao: "Dev",
    idade: 18,
    fazerAniversaio: function()
    {
        this.idade++;
    },
    trocarProfissao: function(profissao) {
        this.profissao = profissao;
    }
}

console.log(`Nome: ${pessoa.nome} | Profissão: ${pessoa.profissao} | Idade: ${pessoa.idade}`);

pessoa.fazerAniversaio();
pessoa.trocarProfissao("Desempregado");

console.log(`Nome: ${pessoa.nome} | Profissão: ${pessoa.profissao} | Idade: ${pessoa.idade}`);