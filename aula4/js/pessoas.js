const pessoas = [

    {nome: "João", idade:20, cidade:"Petrópolis"},
    {nome: "Ana", idade:28, cidade:"Petrópolis"},
    {nome: "Carla", idade:44, cidade:"São Paulo"},
    {nome: "Carlos", idade:58, cidade:"Petrópolis"},
    {nome: "Pedro", idade:20, cidade:"Juiz de fora"},

]

const filtro = pessoas.filter((pessoas) => pessoas.cidade === 'Petrópolis');
//console.log(filtro);

/*Aplicando o Map*/

console.log(filtro.map((pessoa) => 
    pessoa.nome + "-" + pessoa.cidade
)
);
/*Aplicando uma condição*/
const filtro1 = pessoas.filter((pessoas) => pessoas.cidade === 'Juiz de Fora' && pessoa.idade < 18);
//console.log(filtro1);

/* Quando ele encontra o primeiro */
const busca = pessoas.find((pessoa) => pessoa.cidade === "Petrópolis");
//console.log(busca);

const busca1 = pessoas.find((pessoa) => pessoa.cidade.toLowerCase() === "Petrópolis".toLowerCase());
console.log(busca1);

/*Busca o nome que tem a letra o*/
const buscaLetra = pessoas.find((pessoa) => pessoa.nome.toLowerCase().includes("o"));
console.log(buscaLetra);

