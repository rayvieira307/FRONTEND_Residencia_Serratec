const numeros = [2, 10, 12, 8, 13];

// Com filter
//numeros.filter((num) =>num % 2 == 0).forEach((num) => console.log(num));

//Com ternário
//numeros.filter((num) =>num % 2 == 0? console.log(num): "");


//For com ternario 
numeros.filter((num) => {
    num% 2 == 0? console.log(num) : console.log(num+ " Não é multiplo");
});

//Sempre que for filtrar utilizar o filter 
console.log(numeros.filter((num) => num%2 ==0));