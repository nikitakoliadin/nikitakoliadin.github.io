import React, {useLayoutEffect, useEffect} from 'react';
import styles from './App.module.css';
import localization from '../../localization/localization';
import {useController, ParallaxProvider} from 'react-scroll-parallax';
import LinearX from '../LinearX/LinearX';

const ParallaxCache = () => {
    const {parallaxController} = useController();

    useLayoutEffect(() => {
        const handler = () => parallaxController.update();
        window.addEventListener('load', handler);
        return () => window.removeEventListener('load', handler);
    }, [parallaxController]);

    return null;
};

function App() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <div className={styles.App}>
            <ParallaxProvider>
                <ParallaxCache/>
                <div className={styles.Greeting}>
                    <LinearX letters={localization.greeting}
                             centralize={true}
                             size={window.innerWidth / 2}/>
                </div>
            </ParallaxProvider>
        </div>
    );
}

export default App;
