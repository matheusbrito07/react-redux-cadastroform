import {useState} from "react"
import "./style.css"


export default function ResetCliente(){

    //função de esqueci minha senha
    
    const [reset, setReset] = useState(false)
        console.log(reset)
    const handleChange = ({target}) => {
        const {id, value} = target
    setReset({...reset, [id] : value})
    }
        const handleClick=()=>{
            alert(`Sua nova senha foi enviada para o e-mail ${reset.exampleInputEmail1}`)
        }

    return(
        <form>
            <h1 className="h1-form">RECUPERAR SENHA</h1>
            
            <div className="form-group">
                <label htmlFor="exampleInputEmail1"></label>
                <input onChange={handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email" />           
            </div>

                <input onClick={handleClick} type="button" className="btn" value="CONFIRMAR" /> 
       </form>
    )

}