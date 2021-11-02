const http = require("http");
const express = require("express");
const app = express();

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));

app.get("/home", function(req, res) {
    res.send("Olá manas");
});

