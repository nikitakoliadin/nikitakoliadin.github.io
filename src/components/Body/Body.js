import React from 'react';
import styles from './Body.module.css';
import localization from '../../localization/localization';
import LinearX from '../LinearX/LinearX';

function Body() {
    return (
        <div className={styles.Body}>
            <div className={styles.Greeting}>
                <LinearX letters={localization.greeting}
                         centralize={true}
                         size={window.innerWidth / 2}/>
            </div>
        </div>
    );
}

export default Body;
