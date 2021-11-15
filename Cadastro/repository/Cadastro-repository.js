const usuarioModel = require ('../model/user');

class CadastroRepository {
    constructor() {
        this.usuarioModel = usuarioModel;
    }

    novoCadastro (user) {
        console.log("Entrou na repository");
        const query = {
            nome: user.nome
        }
        console.log("Leu a query");
        this.usuarioModel.create(query);
    }
}

module.exports = CadastroRepository;