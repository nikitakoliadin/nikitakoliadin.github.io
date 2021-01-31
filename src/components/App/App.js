import React, {useEffect} from 'react';
import styles from './App.module.css';
import Body from '../Body/Body';

function App() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <div className={styles.App}>
            <Body/>
        </div>
    );
}

export default App;
