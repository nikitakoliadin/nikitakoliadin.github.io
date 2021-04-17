import React from 'react';
import styles from './Background.module.css';
import background from './background.jpg';

function Background() {
    return (
        <div className={styles.Background}>
            <img src={background}
                 alt={''}
                 className={styles.Image}/>
        </div>
    );
}

export default Background;
