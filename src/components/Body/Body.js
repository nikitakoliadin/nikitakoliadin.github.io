import React from 'react';
import styles from './Body.module.css';
import localizations from '../../localizations/localizations';
import LinearX from '../LinearX/LinearX';

function Body() {
    function split(sentence) {
        return sentence.split(' ').map(word => {
            return (
                <div className={styles.Text}>
                    <LinearX letters={word}
                             centralize={true}
                             size={window.innerWidth / 25}/>
                </div>
            );
        });
    }

    return (
        <div className={styles.Body}>
            <div className={styles.Empty}/>
            <div className={styles.Greeting}>
                {
                    split(localizations.greeting.toUpperCase())
                }
            </div>
            <div className={styles.Introducing}>
                {
                    split(localizations.introducing.toUpperCase())
                }
            </div>
            <div className={styles.Activity}>
                {
                    split(localizations.activity.toUpperCase())
                }
            </div>
            <div className={styles.Explanation}>
                {
                    split(localizations.explanation.toUpperCase())
                }
            </div>
            <div className={styles.Empty}/>
        </div>
    );
}

export default Body;
