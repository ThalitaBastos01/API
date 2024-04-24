const express = require('express');
const fs = require('fs/promises');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    const texto =  'tudo bem?'
    await fs.writeFile('./src/b.txt', texto);// essa função ela recebe como primeiro argumento o arquivo que a gente quer receber.


    res.json('ok');
});

app.post('/', async (req, res) => {
    const { nome, idade } = req.body;

    const teste = await fs.readFile('./src/usuarios.json');

    const pessoas = JSON.parse(teste);

    pessoas.push({ nome, idade });

    const pessoasStringfy = JSON.stringify(pessoas);

    await fs.writeFile('./src/usuarios.json', pessoasStringfy);

    return res.json({ mensagem: 'Pesoa cadastrada com sucesso'})
})

app.listen(3000);