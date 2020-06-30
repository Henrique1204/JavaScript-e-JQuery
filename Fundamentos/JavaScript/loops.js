let clientes = ["André", "Rafael", "Maria", "João"];

for (let i = 0; i < clientes.length; i++)
{
    console.log( (clientes[i] == "Maria") ? "Achei a Maria." : `${clientes[i]}.` );
}

let numero = 0, max = 50;

for (let i = numero; i <= max; i += 5)
{
    if (i != 0) {console.log(i);}
}