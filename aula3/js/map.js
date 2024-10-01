const numeros = [10,20,30,40,50];
let novoNumero = [];


for (let i = 0; i < numeros.length; i++) {
    novoNumero.push(numeros[i] * 2);
}
console.log(novoNumero);

console.log ("-----Resultado com Map------");
let novoMap = numeros.map((numeros)=> numeros * 2);
console.log(novoMap);

novoMap.forEach((numeros)=> console.log(numeros));