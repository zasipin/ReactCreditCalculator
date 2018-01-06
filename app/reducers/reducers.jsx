import {AnnuitetCredit} from 'AnnuitetCredit';
import {AnnuitetMonthlyPayment} from 'AnnuitetMonthlyPayment';

export function authReducer(state = {}, action){
    return state;
}

export function creditPropsReducer(state = {}, action){
    switch(action.type){
        case 'SET_CREDIT_SUM':
            return {
                ...state,
                sum: action.sum,
                price: +action.sum + (+state.downPayment)
            }
        case 'SET_PERCENTS':
            return {
                ...state,
                percents: +action.percents
            }
        case 'SET_PRICE':
            return {
                ...state,
                price: action.price,
                sum: action.price - state.downPayment 
            }
        case 'SET_DOWN_PAYMENT':
            return {
                ...state,
                downPayment: action.downPayment,
                sum: state.price - action.downPayment 
            }            
        default:
            return state;
    }    
}

export function paymentsTimetableReducer(state = [], action){
    switch(action.type){
        case 'SET_ADDITIONAL_PAYMENT':
            let itemIndex = state.findIndex((val)=>{ return parseInt(val.getData().months) == parseInt(action.months) }),
                item = state[itemIndex],
                itemState = item.getData(),
                payment = new AnnuitetMonthlyPayment(itemState.sum, itemState.percents, itemState.months, action.extraPay),
                leftToPay = payment.getData().leftToPay,
                // leftPayments = state.filter((val, index) => { return index > itemIndex }).map((leftPayment)=>{
                leftPayments = state.slice(itemIndex + 1).map((leftPayment)=>{
                    let leftPaymentState = leftPayment.getData();
                    let payment = new AnnuitetMonthlyPayment(leftToPay, leftPaymentState.percents, leftPaymentState.months, leftPaymentState.extraPay);
                    leftToPay = payment.getData().leftToPay;
                    return payment;
                });
            
            return [
                //...state.filter((val, index) => { return index < itemIndex }),
                ...state.slice(0, itemIndex),    
                payment,
                ...leftPayments // add left payments, recreate them                
            ];
            // .sort((a, b) => 
            //          { return parseInt(a.getData().months) - parseInt(b.getState().months) }
            //     );
        case 'SET_PAYMENTS_TIMETABLE':
            let items = [], 
                months = action.months,
                sum = action.sum;
            for(;months > 0; months--)
			{
                let payment = new AnnuitetMonthlyPayment(sum, action.percents, months);
                items.push(payment);
				sum = payment.getData().leftToPay;
            }
            return items;
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
                return item.recalculate(item.state.sum, +action.percents);
            });
        case 'SET_PRICE': 
            return state.map((item) => {
                return item.recalculate(action.price - action.downPayment, item.state.percents);
            });   
        case 'SET_DOWN_PAYMENT': 
            return state.map((item) => {
                return item.recalculate(action.price - action.downPayment, item.state.percents);
            });       
        case 'ADD_MONTHS':
            if(action.months < 1 || state.find((val) => { return parseInt(val.getData().months) == parseInt(action.months) }))
                return state;
            var retArr = [...state, new AnnuitetCredit(action.sum, action.percents, action.months)].sort((a, b) => 
                     { return parseInt(a.getData().months) - parseInt(b.getData().months) }
                );
            return retArr;
        case 'REMOVE_MONTHS':        
            if(action.months <= 0)
                return state;

            return state.filter((val) => { return val.getData().months !== action.months });

        default:
            return state;
    }    
    
}

export function activeCreditReducer(state = {}, action){
    switch(action.type){
        case 'SET_ACTIVE_CREDIT_MONTHS':

            return {
                ...state,
                months: action.months
                // ,
                // sum: action.sum,
                // percents: action.percents
            }
        default:
            return state;    
    }
}

export function commonAppStateReducer(state = {}, action) {
    switch(action.type){
        case 'ADD_MONTHS_BUTTON_PUSHED':
            return {
                ...state,
                isAddingMonths: !state.isAddingMonths
            }
        default:
            return state;    
    }
}