import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {App} from 'src/components/App';
import {store} from 'src/redux/store';

import 'normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
