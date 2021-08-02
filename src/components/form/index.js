import LoginCliente from "./loginCliente"
import CadastroCliente from "./cadastroCliente"
import CadastroClienteComp from "./cadastroClienteComp";
import {useState} from 'react';
import "./style.css";


export default function Form (){

    const [render, setRender] =useState(<LoginCliente />)
    return(
        <div className="container-form-opt">
            
            <button className="btn-form-component" onClick={()=>setRender(<CadastroCliente />)}>Cadastro</button>
            <button className="btn-form-component" onClick={()=>setRender(<CadastroClienteComp />)}>Cadastro Completo</button>
                {render}  
        </div>
    )
}