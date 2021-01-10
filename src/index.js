import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

console.log(`Version = ${process.env.REACT_APP_VERSION}`);
console.log(`Register service worker = ${process.env.REACT_APP_REGISTER_SERVICE_WORKER}`);

if (JSON.parse(process.env.REACT_APP_REGISTER_SERVICE_WORKER)) {
    serviceWorker.register();
} else {
    serviceWorker.unregister();
}

const component = (
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);

ReactDOM.render(component, document.getElementById('root'));
