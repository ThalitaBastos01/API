const professores = require('../bancodedados')

const filtrarProfessores = (req, res) => { 
    
    const { stack } = req.query;
    let resultado = professores;

    console.log('cheguei no controlador de listagem de professores');

    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack
        });  
    }

    res.send(resultado);
};

const encontrarUmProfessor = (req, res) => { // :algumacoisa => é chamado de parametro de rota
    console.log('rota para encontrar um professor')
    const professoreEncontrado = professores.find((professor) => {
        return professor.id === Number(req.params.id);
    });
    res.send(professoreEncontrado);
};



module.exports = {
    filtrarProfessores,
    encontrarUmProfessor,
    
};
