import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from './context'
import {BrowserRouter} from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

ReactDOM.render(<Provider><BrowserRouter basename='recipe-app' ><ScrollToTop><App /></ScrollToTop></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
