import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// import jquery from 'jquery';
// import foundation from 'foundation-sites';


import router from 'app/router';
import {configure} from 'configureStore';
import * as actions from 'actions';

var store = configure();
var state = store.getState(); 
for(var years = 1; years <= state.creditProps.years; years++ )
  store.dispatch(actions.addMonthsItem(state.creditProps.sum, state.creditProps.percents, 12 * years));

// Load foundation fonts
// require('style-loader!css-loader!sass-loader!foundation-icons/foundation-icons.scss');
require('foundation-icons/foundation-icons.scss');

// Load foundation
// require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');
require('foundation-sites/dist/foundation.min.css');
// $(document).foundation();

// var elem = new Foundation.ResponsiveMenu($('#1top-animated-menu'));

// App css
// require('style-loader!css-loader!sass-loader!applicationStyles');
require('applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>  
,
  document.getElementById('app')
);
