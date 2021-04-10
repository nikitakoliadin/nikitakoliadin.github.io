import React from 'react';
import styles from './Body.module.css';
import localizations from '../../localizations/localizations';
import LinearX from '../LinearX/LinearX';

function Body() {
    return (
        <div className={styles.Body}>
            <div className={styles.Empty}/>
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
            <div className={styles.Activity}>
                <div className={styles.And}>
                    <LinearX letters={localizations.activityAnd}
                             centralize={true}
                             size={window.innerWidth / 25}/>
                </div>
                <div className={styles.Me}>
                    <LinearX letters={localizations.activityMe}
                             centralize={true}
                             size={window.innerWidth / 25}/>
                </div>
                {
                    localizations.activityPosition.split(' ').map(word => {
                        return (
                            <div className={styles.Position}>
                                <LinearX letters={word}
                                         centralize={true}
                                         size={window.innerWidth / 25}/>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Body;
