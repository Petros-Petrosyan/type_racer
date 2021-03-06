import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Routers } from './containers';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Routers />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
