import React from 'react';
import ReactDOM from 'react-dom';
import "leaflet-control-geocoder";
import {App} from './App';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/Main.css";
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Provider store={store}>
        <Router basename='/Atrappos/'>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();