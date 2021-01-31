import React, {useEffect} from 'react';
import styles from './App.module.css';
import localization from '../../localization/localization';
import LinearX from '../LinearX/LinearX';

function App() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <div className={styles.App}>
            <div className={styles.Greeting}>
                <LinearX letters={localization.greeting}
                         centralize={true}
                         size={window.innerWidth / 2}/>
            </div>
        </div>
    );
}

export default App;
