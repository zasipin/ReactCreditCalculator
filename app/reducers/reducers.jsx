export function authReducer(state = {}, action){
    return state;
}

export function creditPropsReducer(state = {}, action){
    switch(action.type){
        case 'SET_CREDIT_SUM':
            return {
                sum: action.sum
            }
        default:
            return state;
    }    
}