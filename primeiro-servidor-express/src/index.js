//arquivo principal
const express = require('express');
const app = express(); //Em programação, instanciar significa criar um objeto a partir de uma classe. A instância é a representação concreta de um objeto, com valores específicos para seus atributos. No exemplo do código fornecido anteriormente, ao estanciar o Express dentro de uma constante chamada "app", estamos criando uma instância do framework Express, que será utilizada para iniciar e configurar o servidor. Essa instância do Express possui todos os métodos e propriedades da classe, permitindo assim a interação com o framework para criar rotas, configurar middlewares, entre outras funcionalidades.

app.get('/home', (req, res) => { // o metodo get cria uma rota onde essa rota é somente representado pelo '/' e usando o metodo .send
    res.send('Olá.... Esse é meu primeiro servidor com o express');
});

app.get('/', (req, res) => {
    res.send('Essa é a minha rota principal');
});

app.get('/array', (req, res) => {
    const array = [1, 2, 3, 4, 5];
    res.send(array);
});

app.listen(3000); // o metodo listen(ouvinte) para abrir uma porta

// http://localhost:3000/home - local host busca a comunicação com o meu computador atravez da porta 3000. 