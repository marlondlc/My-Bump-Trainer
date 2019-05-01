import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Axios from 'axios'


Axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('jwt')

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
