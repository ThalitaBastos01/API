// exemplo
// http://localhost:3000/carros?senha=123

const validarSenha = (req, res, next) => {
    const { senha } = req.query;

    if (!senha) {
        return res.send('A senha não foi informada'); // para enviar uma resposta
    };

    if (senha !== 'carros123') {
        return res.send('A senha esta incorreta');
    };
    next();
};

module.exports = {
    validarSenha
}
