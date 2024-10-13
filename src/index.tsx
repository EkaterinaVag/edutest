import React from 'react';
import { Provider } from 'react-redux';
import ReactDOMClient from 'react-dom/client';

import App from './components/App/App';
import { store } from './store/store';
import './index.css';

const mountNode = document.getElementById('root')!;
const root = ReactDOMClient.createRoot(mountNode);
root.render(
  <Provider store={store} >
    <App />
  </Provider>
);
