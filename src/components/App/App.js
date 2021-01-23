import React from 'react';
import styles from './App.module.css';
import localization from '../../localization/localization';
import {ParallaxProvider} from 'react-scroll-parallax';
import Greeting from '../Greeting/Greeting';

function App() {
    return (
        <div className={styles.App}>
            <ParallaxProvider>
                <Greeting greeting={localization.greeting}
                          centralize={true}
                          size={window.innerWidth / 2}/>
            </ParallaxProvider>
        </div>
    );
}

export default App;
