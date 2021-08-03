// import { useState } from "react"
// import "./style.css"

// export default function LoginCliente (){
//     const[cliente, setCliente]=useState(false)
            
//         const handleChange= ({target})=>{
//             const {id,value}=target
//         setCliente({...cliente, [id] : value})
//         }
//         const handleClick=()=>{
//                 alert(`Usuario logado com sucesso. ${cliente.exampleInputEmail1}`)
            
//         }
       
//     return(
//        <form>
//            <h1 className="h1-form">LOGIN</h1>
//         <div className="form-group">
//             <label htmlFor="exampleInputEmail1" className="label-form-input"></label>
//             <input onChange={handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email" required="required"/>
//         </div>
//         <div className="form-group">
//             <label htmlFor="exampleInputPassword1" className="label-form-input"></label>
//             <input onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha" required="required"/>
//         </div>
//             <input onClick={handleClick} type="button" className="btn" value="LOGAR" />
//        </form>
//     )

// }