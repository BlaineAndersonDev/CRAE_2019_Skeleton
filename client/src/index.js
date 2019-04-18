// We import React here to all for its use.
import React from 'react';
// This allows us to render dynamically to the DOM ()
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import './index.css';

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));
