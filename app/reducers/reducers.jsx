export function authReducer(state = {}, action){
    return state;
}

export function creditPropsReducer(state = {}, action){
    switch(action.type){
        case 'SET_CREDIT_SUM':
            return {
                ...state,
                sum: action.sum
            }
        case 'SET_PERCENTS':
            return {
                ...state,
                percents: action.percents
            }    
        default:
            return state;
    }    
}