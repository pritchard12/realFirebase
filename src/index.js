import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes.js';

ReactDOM.render (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
