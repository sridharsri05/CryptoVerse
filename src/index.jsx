import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/reset.css';
import store from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider  store={store}>
      <App />
    </Provider>
  </Router>


);

