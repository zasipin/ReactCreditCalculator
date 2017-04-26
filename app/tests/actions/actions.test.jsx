import expect from 'expect';
import * as actions from 'actions';
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';

describe('Actions', () => {
    it('should generate SET_CREDIT_SUM', () => {
        var action = {
            type: 'SET_CREDIT_SUM',
            sum: 123
        }

        var res = actions.setCreditSum(action.sum);

        expect(res).toEqual(action);
    });
});