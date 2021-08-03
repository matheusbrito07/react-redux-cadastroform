
const INITIAL_STATE = {
    activeForm:false,
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

        case "CONTROLLER_FORM":
            state = {
                ...state, 
                activeForm:action.payload,
            }
            return state

        default:
            return state
    }
}