function imc(peso = 50, altura = 1)
{
    return peso / Math.pow(altura, 2);
}

function corPreferida(cor)
{
    switch (cor.toLowerCase())
    {
        case "azul":
            console.log("Você gosta do céu");
            break;
        case "amarelo":
            console.log("Você gosta de ouro");
            break;
        case "verde":
            console.log("Você gosta do campo");
            break;
        default:
            console.log("Você não gosta de nada");
            break;
    }
}

corPreferida("azuL");

let totalPaises = 200;

function precisoVisitar(paisesVisitados = 0)
{
    let faltaVisitar = totalPaises - paisesVisitados;
    console.log(`Faltam ${faltaVisitar} países para você visitar.`)
}

precisoVisitar(5);

let valorCarro = function(portas = 2) {
    let precoInicial = 10000;
    return portas * precoInicial;
}

console.log(valorCarro());