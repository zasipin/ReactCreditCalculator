import * as redux from 'redux';
import thunk from 'redux-thunk';

import {
    // searchTextReducer, showCompletedReducer, todosReducer, 
    authReducer, creditPropsReducer, annuitetPaymentsReducer} from 'reducers';

export var configure = (initialState = {}) => {
    var reducer = redux.combineReducers({
        // searchText: searchTextReducer,
        // showCompleted: showCompletedReducer,
        // todos: todosReducer,
        auth: authReducer,
        creditProps: creditPropsReducer,
        annuitetPayments: annuitetPaymentsReducer
    });
    
    initialState.creditProps = {
        sum: 100000,
        percents: 10,
        years: 30,
        step: 10000,
        price: 100000,
        downPayment: 0
    }

    var store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
}