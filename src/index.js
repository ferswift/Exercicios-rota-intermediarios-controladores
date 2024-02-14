const express = require("express"); // acessando o pacote/biblioteca npm instll express // nodemon npm install -D nodemon
const { listarCarros, obterCarro } = require("./controladores/carros"); // Importando os controladores
const { validarSenha } = require("./middleware");

const app = express(); // instanciando o express

app.use(validarSenha); // ultilizando um middleware

app.get("/carros", listarCarros);
app.get("./carros/:id", obterCarro);

app.listen(3000); // escutar a porta 3000
