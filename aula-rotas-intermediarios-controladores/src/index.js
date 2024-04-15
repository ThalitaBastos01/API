const { 
    filtrarProfessores, encontrarUmProfessor 
} = require('./controladores/professores'); // exportar um arquivo pra outra pasta e etc.


const express = require('express');

const app = express();

//console.log(req.query) //query = consulta ele armazena todas as propriedades que a gente cria como parametros de consulta na url exp: ?nome='Guido Cerqueira'&stack=Backend;

const primeiroIntermediario = (req, res, next) => {
    console.log('passei no primeiro intermediário');
    next();
}

const segundoIntermediario = (req, res, next) => {
    console.log('passei no segundo intermediário');
    next();
}

const intermediarioDaRota = (req, res, next) => {
    console.log('passei no intermediario da rota');
    next();
}

// app.use(primeiroIntermediario); 
// app.use(segundoIntermediario);// assim que a gente informa para o express que vai criar um intermediario independente --- ele recebe uma função e essa função recebe 3 argumentos

// localhosto:3000/professores
app.get('/professores',segundoIntermediario, intermediarioDaRota, filtrarProfessores);

// localhosto:3000/professores/2
app.get('/professores/:id', encontrarUmProfessor); 

app.listen(3000);

// parametros de consulta localhost:3000/professores?nome=guido ou localhost:3000/professores?nome='Guido Cerqueira'&stack=Backend === ?(parametro)= qualquercoisa...

