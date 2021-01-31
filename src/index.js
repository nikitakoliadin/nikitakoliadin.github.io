import React, {useLayoutEffect} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {useController, ParallaxProvider} from 'react-scroll-parallax';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App/App';

console.log(`Version = ${process.env.REACT_APP_VERSION}`);
console.log(`Register service worker = ${process.env.REACT_APP_REGISTER_SERVICE_WORKER}`);

if (JSON.parse(process.env.REACT_APP_REGISTER_SERVICE_WORKER)) {
    serviceWorker.register();
} else {
    serviceWorker.unregister();
}

const ParallaxCache = () => {
    const {parallaxController} = useController();

    useLayoutEffect(() => {
        const handler = () => parallaxController.update();
        window.addEventListener('load', handler);
        return () => window.removeEventListener('load', handler);
    }, [parallaxController]);

    return null;
};

const component = (
    <React.StrictMode>
        <BrowserRouter>
            <ParallaxProvider>
                <ParallaxCache/>
                <App/>
            </ParallaxProvider>
        </BrowserRouter>
    </React.StrictMode>
);

ReactDOM.render(component, document.getElementById('root'));
