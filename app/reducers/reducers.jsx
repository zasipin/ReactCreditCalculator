import {AnnuitetCredit} from 'AnnuitetCredit';

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

export function annuitetPaymentsReducer(state = [], action){
    switch(action.type){
        case 'SET_CREDIT_SUM':
            return state.map((item) => {
                return item.recalculate(action.sum, item.state.percents);
            });
        case 'SET_PERCENTS':
            return state.map((item) => {
                return item.recalculate(item.state.sum, action.percents);
            });
        case 'ADD_MONTHS':
            return [...state, new AnnuitetCredit(action.sum, action.percents, action.months)];    
        default:
            return state;
    }    
    
}