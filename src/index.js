import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import FormExample from './components/FormExample'
//import Ejercicio1 from './components/Ejercicio1';
import Exercise2 from './components/Exercise2';
import * as serviceWorker from './serviceWorker';


//ReactDOM.render(<FormExample />, document.getElementById('root'));
//ReactDOM.render(<Ejercicio1 />, document.getElementById('root'));
ReactDOM.render(<Exercise2 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
