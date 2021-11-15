const CadastroService = require ('./service/Cadastro-service');
const express = require("express");

class CadastroController {
    constructor() {
        this.service = new CadastroService();
    }

    novoCadastro (user) {
        this.service.novoCadastro(user);
        console.log("Voltou da service");
    }

}

module.exports = CadastroController;