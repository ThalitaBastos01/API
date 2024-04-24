const fsPromises = require('fs/promises');
const fs = require('fs');

// é assim que utilizamos as funções assincronas com bibliotecas fs/primises
console.log('antes de ler');

// const a = fsPromises.readFile('b.txt');

// a.then((data) => {
//     console.log(data.toString());
// });

// a.catch((erro) => {
//     console.log(erro);
// });

// utilizando 
(async function(){
    const a = await fsPromises.readFile('a.txt');

    console.log(a);
})();

console.log('Depois de ler');
