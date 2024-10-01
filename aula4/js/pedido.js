const pedidos = [
    {numero: 123, status: "enviado", total:1500},
    {numero: 133, status: "enviado", total:2000},
    {numero: 144, status: "enviado", total:1800},
];

//ele esta somando o total do vetor
const totalGeral = pedidos.reduce((soma, pedido) => soma + pedido.total,0 );
console.log(`Resultado:${totalGeral}`);