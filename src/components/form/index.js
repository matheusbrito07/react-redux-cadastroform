import LoginCliente from "./loginCliente"
import CadastroCliente from "./cadastroCliente"
import CadastroClienteComp from "./cadastroClienteComp";
import {useState} from 'react';
import "./style.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";



export default function Form (){
    const reducer = useSelector( state => state.cadastroReducer.activeForm)
    const [render, setRender] =useState(false)

    useEffect(() => {
        reducer ? setRender(<CadastroClienteComp />) : setRender(<CadastroCliente />)
    }, [reducer])
  
    return(
        <div className="container-form-opt">
            
            <button className="btn-form-component" onClick={()=>setRender(<CadastroClienteComp />)}>Cadastro Completo</button>
                {render}  


        </div>
    )
}