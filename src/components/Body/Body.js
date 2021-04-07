import React from 'react';
import styles from './Body.module.css';
import localizations from '../../localizations/localizations';
import LinearX from '../LinearX/LinearX';

function Body() {
    return (
        <div className={styles.Body}>
            <div className={styles.WhitePage}/>
            <div className={styles.Greeting}>
                <LinearX letters={localizations.greeting}
                         centralize={true}
                         size={window.innerWidth / 25}/>
            </div>
        </div>
    );
}

export default Body;
