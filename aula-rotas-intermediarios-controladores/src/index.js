const express = require('express');

const app = express();

const professores = [
    {
        id: 1,
        nome: 'Guido',
        stack: 'Backend'
    },
    {
        id: 2,
        nome: 'Dani',
        stack: 'Frontend'
    },
    {
        id: 3,
        nome: 'Diego',
        stack: 'Frontend'
    },
    {
        id: 4,
        nome: 'Vidal',
        stack: 'Backend'
    }
];




// localhosto:3000/professores
app.get('/professores', (req, res) => { 
    //console.log(req.query) //query = consulta ele armazena todas as propriedades que a gente cria como parametros de consulta na url exp: ?nome='Guido Cerqueira'&stack=Backend
    const { stack } = req.query;
    let resultado = [];

    if (req.query.stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack
        });
        res.send(resultado);
    }

    res.send(professores);
});

// localhosto:3000/professores/
app.get('/professores/:id', (req, res) => { // :algumacoisa => é chamado de parametro de rota
    const professoreEncontrado = professores.find((professor) => {
        return professor.id === Number(req.params.id);
    });
    res.send(professoreEncontrado);
}); 



app.listen(3000);

// parametros de consulta localhost:3000/professores?nome=guido ou localhost:3000/professores?nome='Guido Cerqueira'&stack=Backend === ?(parametro)= qualquercoisa...