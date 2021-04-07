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
            <div className={styles.Introducing}>
                <div className={styles.Me}>
                    <LinearX letters={localizations.introducingMe}
                             centralize={true}
                             size={window.innerWidth / 25}/>
                </div>
                <div className={styles.Name}>
                    <LinearX letters={localizations.introducingName}
                             centralize={true}
                             size={window.innerWidth / 25}/>
                </div>
                <div className={styles.Surname}>
                    <LinearX letters={localizations.introducingSurname}
                             centralize={true}
                             size={window.innerWidth / 25}/>
                </div>
            </div>
        </div>
    );
}

export default Body;
