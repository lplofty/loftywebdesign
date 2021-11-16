import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/services">
                <Services />
            </Route>
            <Route path="/contact" component={Contact}>
            </Route>
            <Route path="/" exact>
                <App />
            </Route>
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
