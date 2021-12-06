const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://localhost:27017/DigNas');

const schema = mongoose.Schema({
    nome: String,
    dtNasc: String,
    genero: String,
    etnia: String,
    cep: String,
    logradouro: String,
    numero: String,
    complemento: String,
    bairro: String,
    cidade: String,
    estado: String,
    telefone: String,
    celular: String,
    email: String,
    estadoCivil: String,
    escolaridade: String,
    apoioFinanceiro: String,
    redeCelular: Boolean,
    distCidade: Number,
    filhos: Boolean,
    qtdeFilhos: Number    
}, {
    collection: 'usuarios'
});

module.exports = connection.model('usuarios', schema);