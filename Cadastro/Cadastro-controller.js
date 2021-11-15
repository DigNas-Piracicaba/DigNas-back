const CadastroService = require ('./service/Cadastro-service');
const express = require("express");

class CadastroController {
    constructor() {
        this.service = new CadastroService();
    }

    async novoCadastro (req, res) {
        const user = req.body;
        //chama a função da service
        res.send("Olá, " + user.nome + " seu cadastro foi efetuado com sucesso!")
    }

}

module.exports = CadastroController;