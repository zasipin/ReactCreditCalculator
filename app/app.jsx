import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import router from 'app/router';
import {configure} from 'configureStore';

var store = configure();

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>  
,
  document.getElementById('app')
);
