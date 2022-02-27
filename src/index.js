import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './libs/bootstrap.min.css';
import App from './game/App';

window.addEventListener('load', () => {

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
})