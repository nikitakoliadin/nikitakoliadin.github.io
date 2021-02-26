import React, {useEffect} from 'react';
import styles from './App.module.css';
import localizations from '../../localizations/localizations';
import {useLocation} from 'react-router-dom';
import queryParser from 'query-string';
import {useLocalStorage} from '../../hooks/useLocalStorage';
import Freezing from '../Freezing/Freezing';
import Header from '../Header/Header';
import Body from '../Body/Body';

function App() {
    const location = useLocation();
    const [language, setLanguage] = useLocalStorage('language', defineLanguage, (language) => language && localizations.setLanguage(language.toLowerCase()), (language) => language && localizations.setLanguage(language.toLowerCase()));

    function defineLanguage() {
        const {language} = queryParser.parse(location.search);
        if (language) {
            localizations.setLanguage(language.toString().toLowerCase());
        } else {
            const defaultLanguage = localizations.getAvailableLanguages()[0];
            localizations.setLanguage(defaultLanguage);
        }
        return localizations.getLanguage();
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    useEffect(() => {
        if (language) {
            console.log(`Language = ${language}`);
        }
    }, [language]);
    return (
        <div className={styles.App}>
            <Freezing fullPageFreezing={true}
                      leftHalfPageFreezing={true}
                      rightHalfPageFreezing={true}
                      firstBlockFreezing={true}
                      secondBlockFreezing={true}
                      thirdBlockFreezing={true}
                      fourthBlockFreezing={true}
                      firstHorizontalLineFreezing={true}
                      secondHorizontalLineFreezing={true}
                      thirdHorizontalLineFreezing={true}
                      firstVerticalLineFreezing={true}
                      secondVerticalLineFreezing={true}
                      startAnimationDuration={10}
                      minAnimationDuration={8}
                      maxAnimationDuration={12}
                      startAnimationDelay={0}
                      minAnimationDelay={0}
                      maxAnimationDelay={3}>
                <Header languages={localizations.getAvailableLanguages()}
                        activeLanguage={language}
                        setLanguage={setLanguage}
                        languageButtonType={'circle'}/>
                <Body/>
            </Freezing>
        </div>
    );
}

export default App;
