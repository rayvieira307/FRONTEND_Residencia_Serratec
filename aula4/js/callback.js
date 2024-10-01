const saudacao = (nome) = alert (`Ola ${nome}`);
 const processamento = (callback) => {

    const nome = prompt ("Preencha o nome: ");
    callback(nome);
 }

 processamento(saudacao);