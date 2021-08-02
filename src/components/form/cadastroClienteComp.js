import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import reducers from "../../store/reducers";
import { reduce } from "async";
export default function CadastroClienteComp(){
   
    const [objCliente, setObjCliente] = useState(false)
    const [objEndereco, setObjEndereco] = useState(false)
    const reducer = useSelector(state => state)
    console.log(reducer)
    const handleChangeCliente = ({target}) => {
        const {name, value } = target 
        setObjCliente({...objCliente, [name]: value})
    }

    const handleChangeEndereco = ({target}) => {
        const {name, value } = target 
        setObjEndereco({...objEndereco, [name]: value})
    }

    let headers = {
        
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege...'
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        axios.post(`http://localhost:4000/cliente`, objCliente, headers)
        .then(response => axios.post(`http://localhost:4000/endereco/${response.data.cadastrado}`, objEndereco, headers))

    }
    return(

                <form className="container-form">
                <h1 className="h1-form">Detalhes do Cliente</h1>

                <div className="container-input">
                <input onChange={handleChangeCliente} value={reducer.cadastroReducer.tipo}  name="tipo" type="text" id="tipopessoa" required/>
                <label htmlFor="tipopessoa">Tipo:</label>
                </div>

                <div className="container-input">   
                <input onChange={handleChangeCliente} value={reducer.cadastroReducer.cpfCnpj} name="cpf" type="text" id="cpf" required/>
                <label htmlFor="cpf">CPF:</label>
                </div>
                
                <div className="container-input">
                <input onChange={handleChangeCliente} name="nome" type="text" id="name" required/>
                <label htmlFor="name">Nome:</label>
                </div>

                <div className="container-input">
                <input onChange={handleChangeCliente} name="ins_estadual" type="text" id="ins-estadual" required/>
                <label htmlFor="ins-estadual">Inscrição Estadual:</label>
                </div>

                <div className="container-input">
                <input onChange={handleChangeCliente} name="ins_munincipal" type="text" id="ins-municipal" required/>
                <label htmlFor="ins-municipal">Inscrição Municipal:</label>
                </div>

                <div className="container-input">
                <input onChange={handleChangeCliente} name="email" type="text" id="email" required/>
                <label htmlFor="email">E-mail:</label>
                </div>

                <div className="container-input">
                <input onChange={handleChangeCliente} name="contato" type="text" id="contato" required/>
                <label htmlFor="cidade">Contato:</label>
                </div>

                <div className="container-input">
                <input onChange={handleChangeCliente} name="bloqueado" type="checkbox" id="bloqueado" required/>
                <label htmlFor="bloqueado">Bloqueado:</label>
                </div>
                
                <div className="row-form">
                <h1 className="h1-form">Endereço:</h1>

                <div className="container-input">
                <input onChange={handleChangeEndereco} name="rua" type="text" id="rua" required/>
                <label htmlFor="rua">Av/Rua:</label>
                </div>

                <div className="container-input">
                <input onChange={handleChangeEndereco} name="numero" type="text" id="numero" required/>
                <label htmlFor="numero">Número:</label>
                </div>

                <div className="container-input">
                <input onChange={handleChangeEndereco} name="bairro"  type="text" id="bairro" required/>
                <label htmlFor="bairro">Bairro:</label>
                </div>

                <div className="container-input">
                <input onChange={handleChangeEndereco} name="estado" type="text" id="estado" required/>
                <label htmlFor="estado">Estado:</label>
                </div>
                <div className="container-input">
                <input onChange={handleChangeEndereco} name="sigla" type="text" id="sigla" required/>
                <label htmlFor="sigla">Sigla:</label>
                </div>

                <div className="container-input">
                <input onChange={handleChangeEndereco} name="cod_uf" type="text" id="coduf" required/>
                <label htmlFor="coduf">Cód.UF:</label>
                </div>

                <div className="container-input">
                <input onChange={handleChangeEndereco} name="cidade" type="text" id="cidade" required/>
                <label htmlFor="cidade">Cidade:</label>
                </div>

                <div className="container-input">
                <input onChange={handleChangeEndereco} name="codmun" type="text" id="codmun" required/>
                <label htmlFor="codmun">Cód.Município:</label>
                </div>

                <div className="container-input">
                <input onChange={handleChangeEndereco} name="cep" type="text" id="cep" required/>
                <label htmlFor="cep">CEP:</label>
                </div>

                <div className="container-input">
                <input onChange={handleChangeEndereco} name="ddd" type="text" id="ddd" required/>
                <label htmlFor="ddd">DDD:</label>
                </div>

                <div className="container-input">
                <input onChange={handleChangeEndereco} name="telefone" type="text" id="telefone" required/>
                <label htmlFor="telefone">Telefone:</label>
                </div>
                </div>

                <button onClick={handleSubmit} className="form-btn">Salvar</button>
                </form>
    )
}