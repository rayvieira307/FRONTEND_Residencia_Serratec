function asyncFunction(){

    setTimeout(() => {

        console.log("Async Function");
    }, 3000);

}
console.log("Inicio do Programa");
asyncFunction();
console.log("Fim de Programa");