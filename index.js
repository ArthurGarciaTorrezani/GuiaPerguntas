const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/dataBase");
const Pergunta = require("./database/Pergunta");

connection
    .authenticate()
    .then(()=>{
        console.log("Conectado")
    })
    .catch((msgErro)=>{
        console.log(msgErro)
    });
/* connection.authenticate().then(()=>{console.log("conectado")}).catch((msgErro)=>{console.log(msgErro)}) -> connection.authenticate is not a function */

app.set("view engine","ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
   Pergunta.findAll({raw:true}).then(perguntas=>{
    res.render("index",{
        perguntas:perguntas
        });
   });
});

app.get("/perguntar",(req,res)=>{
    res.render("perguntar");
});

app.post("/salvarpergunta",(req,res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({ // INSERT INTO...
        titulo: titulo,
        descricao:descricao
    }).then(()=>{
        res.redirect("/");
    });
});

app.listen(8080,()=>{
    console.log("rodando");
});