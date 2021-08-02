const express = require('express')
const app = express()
const connect = require('./connect')
//rota temp

//configs

app.use(express.json())

// rotas app

const cliente = require('./routes/user/cliente')
app.use(cliente)

const endereco = require('./routes/endereço/endereco')
app.use(endereco)

//função para abrir o sv
let port = 4000
app.listen(port,()=>{
    console.log("rodando em : http://localhost:4000")
})