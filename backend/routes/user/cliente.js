const express = require('express')
const connect = require('../../connect')
const cliente = express ()

cliente.get('/cliente',(req, res, next)=>{
    let sql = "select * from cadastroCliente"

    connect.query(sql,(error, result)=>{
        if(error){

            res.status(500).json(error)

        }else{

            res.status(200).json(result)

        }
    })
})

cliente.get('/cliente/:cpf',(req, res, next)=>{
    let buscador= req.params.cpf
    let sql = `select * from cadastroCliente WHERE cadastroCliente.cpf LIKE "${buscador}%"`

    connect.query(sql,(error, result)=>{
        if(error){

            res.status(500).json(error)

        }else{

            res.status(200).json(result)

        }
    })
})

cliente.post ('/cliente', (req, res, next)=>{
    let sql="INSERT INTO cadastroCliente SET?"
    let dados={
        tipo:req.body.tipo,
        cpf:req.body.cpf,
        nome:req.body.nome,
        ins_estadual:req.body.ins_estadual,
        ins_municipal:req.body.ins_municipal,
        email:req.body.email,
        contato:req.body.contato
    }

    connect.query(sql, dados, (error,result)=> {
        if(error){
            res.status(500).json(error)
        }else{
            res.status(200).json({cadastrado: dados.cpf, log: result})
        }
    })
})

cliente.put ('/cliente/:id_cliente',(req, res, next)=>{
    let buscador = req.params.id_cliente
    let sql=`UPDATE cadastroCliente SET? WHERE cadastroCliente.cpf= "${buscador}"`
    let dados={
        tipo:req.body.tipo,
        cpf:req.body.cpf,
        nome:req.body.nome,
        ins_estadual:req.body.ins_estadual,
        ins_municipal:req.body.ins_municipal,
        email:req.body.email,
        contato:req.body.contato
    }

    connect.query(sql, dados, (error,result)=>{
        if(error){
            res.status(500).json(error)

        }else{
            res.status(200).json(result)
        }
    })

})


cliente.delete('/cliente/:id_cliente',(req, res, next)=>{
 let buscador = req.params.id_cliente
 let sql = `DELETE FROM cadastroCliente WHERE cadastroCliente.id_cliente = ${buscador}`

 connect.query(sql, (error,result)=>{
    if(error){
        res.status(500).json(error)

     }else{
        res.status(200).json(result)
    }
})

})

 module.exports = cliente