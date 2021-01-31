import React, {useState, useEffect} from 'react';
import styles from './App.module.css';
import localization from '../../localization/localization';
import {useLocation} from 'react-router-dom';
import queryParser from 'query-string';
import Body from '../Body/Body';

function App() {
    const location = useLocation();
    const [language, setLanguage] = useState();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    useEffect(() => {
        if (language) {
            console.log(`Language = ${language}`);
        } else {
            defineLanguage(location, setLanguage);
        }
    }, [location, language]);
    return (
        <div className={styles.App}>
            <Body/>
        </div>
    );
}

function defineLanguage(location, setLanguage) {
    const {language} = queryParser.parse(location.search);
    if (language) {
        localization.setLanguage(language.toString().toLowerCase());
    } else {
        const defaultLanguage = localization.getAvailableLanguages()[0];
        localization.setLanguage(defaultLanguage);
    }
    setLanguage(localization.getLanguage());
}

export default App;
