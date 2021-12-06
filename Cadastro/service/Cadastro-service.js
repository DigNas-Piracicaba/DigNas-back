const cadastroRepository = require ('../repository/Cadastro-repository');

class CadastroService {
    constructor() {
        this.repository = new cadastroRepository;
    }

    novoCadastro (user) {
        this.repository.novoCadastro(user);
        console.log("Voltou da repository");
    }
}

module.exports = CadastroService;