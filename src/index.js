import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from './context'
import {BrowserRouter} from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

ReactDOM.render(<Provider><BrowserRouter basename='recipe-app' ><ScrollToTop><App /></ScrollToTop></BrowserRouter></Provider>, document.getElementById('root'));

