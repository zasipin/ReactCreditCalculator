import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import router from 'app/router';
import {configure} from 'configureStore';
import * as actions from 'actions';

var store = configure();
var state = store.getState(); 
for(var years = 1; years <= state.creditProps.years; years++ )
  store.dispatch(actions.addMonthsItem(state.creditProps.sum, state.creditProps.percents, 12 * years));

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// var elem = new Foundation.ResponsiveMenu($('#1top-animated-menu'));

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>  
,
  document.getElementById('app')
);
