import { useState } from "react"
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import "./style.css"
import { connect, useDispatch } from "react-redux"


 function CadastroCliente (){
        /* const [cadastro,setCadastro]= useState (false)
        console.log(cadastro)
        const handleChange=({target})=>{
            const {id, value}=target
        setCadastro({...cadastro,[id]:value})
        }
        */
        const dispatch = useDispatch ();    
        const [cpfCnpj, setCpfCnpj] = useState("");
        const [, setMask] = useState("");
        const [tipo, setTipo] = useState("");
        

        return(
            <form className="login-form">
                <h1 className="h1-form">Cadastro do Cliente</h1>

                <div className="form-group-main">
                <div className="form-group-afterSelect">Tipo:*
                <select 
                    id="tipo" 
                    className="form-group-select" 
                    value={tipo}
                    onChange={e => setTipo(e.currentTarget.value)}>
                    <option selected ></option>
                    <option value="Pessoa Física">Pessoa Física</option>
                    <option value="Pessoa Jurídica">Pessoa Jurídica</option>
                </select>
                </div>

                <div className="form-group">CPF:*
                 <CpfCnpj className="form-cpf" value={cpfCnpj} id={cpfCnpj} onChange={(event, type) => {
                    setCpfCnpj(event.target.value);
                    setMask(type === "CPF");
                 }}/>
                 </div>
                </div>

               
                 <input onClick={()=> dispatch({type:"SALVAR_CADASTRO",payload:{tipo,cpfCnpj}})} type="button" className="btn" value="Enviar" />
                
            </form>
         )
    

}
    export default connect ((state)=> ({
        cadastro:state.cadastroReducer
    }))(CadastroCliente)