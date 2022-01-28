import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/Counter'
import { Provider } from 'react-redux'
// react-redux 
import store  from './store'
import App  from './App'

ReactDOM.render(
  //Provider把store暴露全局，可以在组件中访问store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


