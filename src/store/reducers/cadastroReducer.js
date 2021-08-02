const INITIAL_STATE = {
    tipo:"",
    cpf:"",
}

export default function cadastroReducer( state = INITIAL_STATE, action) {
    console.log(action);
    switch (action.type) {
        
        case "SALVAR_CADASTRO":
            state = {
                ...state,
                tipo:action.payload.tipo,
                cpfCnpj:action.payload.cpfCnpj,
            }
            console.log("state",state)
            return state
    
        default:
            return state
    }
}