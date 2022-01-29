
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'
import App from './App';
import styles from "./styles"
import { Global } from "@emotion/react"
ReactDOM.render(
  <Provider store={store}>
     <Global styles={styles} />
    <App />
  </Provider>,
  document.getElementById('root')
);

