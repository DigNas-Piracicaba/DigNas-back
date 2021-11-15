const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://localhost:27017/DigNas');

const schema = mongoose.Schema({
    nome: String
}, {
    collection: 'usuarios'
});

module.exports = connection.model('usuarios', schema);