//funcao declarativa
function mensagem(){
    console.log("Aula de JS")
}
//mensagem();

//Função anôninma
let texto = function (t) {
    console.log(t)
    return "Oi";
}

//console.log(texto("Aula de Js"));

function soma(num1, num2){
    return num1 + num2;
}

let res = (num1, num2) => num1 + num2;
console.log(res(10,40));

//console.log(`Resultado: ${soma(10,20)} `);
//Function Expression ou Arrow Function

let msg = () => console.log("Aula de Js")
msg();