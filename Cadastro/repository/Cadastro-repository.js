const usuarioModel = require ('../model/user');
const utils = require ('../../utils/utils');

class CadastroRepository {
    constructor() {
        this.usuarioModel = usuarioModel;
        this.utils = utils;
    }

    radioFinanceiro (opcao_apoio_financeiro) {
        switch(opcao_apoio_financeiro){
            case('op1'):
                return 'nao';
            case('op2'):
                return 'proximo';
            case('op3'):
                return 'longe';
        }
    }

    radioBool (opcao) {
        switch(opcao){
            case('op1'):
                return true;
            case('op2'):
                return false;
        }
    }

    novoCadastro (user) {
        console.log("Entrou na repository");
        console.log(user);
        const query = {
            nome: user.nome,
            dtNasc: ((user.dataNascimento).replace("-","")).replace("-",""),
            genero: user.genero,
            etnia: user.etnia,
            cep: user.cep,
            logradouro: user.logradouro,
            numero: user.numero,
            complemento: user.complemento,
            bairro: user.bairro,
            cidade: user.cidade,
            estado: user.estado,
            telefone: user.telefone,
            celular: user.celular,
            email: user.email,
            estadoCivil: user.estado_civil,
            escolaridade: user.escolaridade,
            apoioFinanceiro: this.radioFinanceiro(user.opcao_apoio_financeiro),
            redeCelular: this.radioBool(user.opcao_rede_celular),
            distCidade: Number(user.dist_cidade),
            filhos: this.radioBool(user.opcao),
            qtdeFilhos: Number(user.quantos_filhos)    
        }
        console.log("Leu a query:" + query);
        this.usuarioModel.create(query);
    }
}

module.exports = CadastroRepository;

