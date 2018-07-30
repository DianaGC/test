import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MeseroApp from "./MeseroApp";
import PizzaPartyContainer from './Components/Container/PizzaPartyContainer';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MeseroApp />, document.getElementById('root'));
registerServiceWorker();
