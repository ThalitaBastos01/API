const fs = require('fs/promises');

(async function(){
    const arquivoJson = await fs.readFile('teste.json');

    // como exibir como um objeto js para acessar. 
    const pessoas = JSON.parse(arquivoJson);

    pessoas.push({
        nome: 'Guido',
        idade: 31
    });

    //como transformar o formato js em json para exportar ele para dentro do arquivo.
    const arrayJson = JSON.stringify(pessoas);

    console.log(arrayJson);
})();