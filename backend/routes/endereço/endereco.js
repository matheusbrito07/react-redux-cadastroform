const express = require ('express')
const connect = require('../../connect')
const endereco = express()

endereco.get ('/endereco',(req, res, next)=>{
    let sql = `
    SELECT endereco.*, cadastroCliente.nome
    FROM endereco
    JOIN cadastroCliente
    ON cadastroCliente.cpf = endereco.id_cliente`

    connect.query(sql,(error, result)=>{
        if(error){
            
            res.status(500).json(error)
        }else{

            res.status(200).json(result)
        }
    })
})

endereco.get('/endereco/:fk_cliente',(req, res, next)=>{
    let buscador= req.params.fk_cliente
    let sql = `
    SELECT endereco.*, cadastroCliente.nome
    FROM endereco
    JOIN cadastroCliente
    ON cadastroCliente.cpf = endereco.id_cliente
    WHERE endereco.id_cliente = "${buscador}"`

    connect.query(sql,(error, result)=>{
        if(error){

            res.status(500).json(error)
        }else{
            res.status(200).json(result)
        }
    })
})

endereco.post ('/endereco/:fk_cliente',(req, res, next)=>{
    let sql="INSERT INTO endereco SET?"
    let dados={
        id_cliente:req.params.fk_cliente,
        rua:req.body.rua,
        numero:req.body.numero,
        bairro:req.body.bairro,
        telefone:req.body.telefone,
        ddd:req.body.ddd,
        cep:req.body.cep,
        codmun:req.body.codmun,
        cidade:req.body.cidade,
        cod_uf:req.body.cod_uf,
        sigla:req.body.sigla,
        estado:req.body.estado
    }

    connect.query(sql, dados, (error,result)=>{
        if(error){
            res.status(500).json(error)
        }else{
            res.status(200).json(result)
        }
    })
})

endereco.put ('/endereco/:fk_cliente', (req, res, next)=> {
    let buscador = req.params.fk_cliente
    let sql=`UPDATE endereco SET? WHERE endereco.id_cliente= ${buscador}`
    let dados={
        id_cliente:req.params.fk_cliente,
        rua:req.body.rua,
        numero:req.body.numero,
        bairro:req.body.bairro,
        telefone:req.body.telefone,
        ddd:req.body.ddd,
        cep:req.body.cep,
        codmun:req.body.codmun,
        cidade:req.body.cidade,
        cod_uf:req.body.cod_uf,
        sigla:req.body.sigla,
        estado:req.body.estado
    }

    connect.query(sql, dados, (error, result)=>{
        if(error){
            res.status(500).json(error)
        }else{
            res.status(200).json(result)
        }
    })
})

endereco.delete('/endereco:fk_cliente', (req, res, next)=>{
    let buscador = req.params.fk_cliente
    let sql = `DELETE FROM endereco WHERE endereco.fk_cliente = ${buscador}`

    connect.query(sql, (error, result)=>{
        if(error){
            res.status(500).json(error)

        }else{
            res.status(200).json(result)
        }
    })
})
module.exports = endereco