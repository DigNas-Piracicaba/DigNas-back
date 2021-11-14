const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true}))

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));

app.post("/novoCadastro", function(req, res) {
    res.send("Olá, " + req.body.nome + " seu cadastro foi efetuado com sucesso!");
});

app.get("/", function(req, res) {
    res.send("Rodando");
});