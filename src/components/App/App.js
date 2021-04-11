import React, {useEffect} from 'react';
import {deviceDetect, BrowserView, TabletView, MobileOnlyView} from 'react-device-detect';
import styles from './App.module.css';
import localizations from '../../localizations/localizations';
import {useLocation} from 'react-router-dom';
import queryParser from 'query-string';
import {useLocalStorage} from '../../hooks/useLocalStorage';
import Freezing from '../Freezing/Freezing';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

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
        console.log('User agent = ', deviceDetect());
    }, []);
    useEffect(() => {
        if (language) {
            console.log(`Language = ${language}`);
        }
    }, [language]);
    return (
        <div className={styles.App}>
            <BrowserView viewClassName={styles.Browser}>
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
                          firstImageFreezing={true}
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
                    <Body parallax={true}/>
                    <Footer/>
                </Freezing>
            </BrowserView>
            <TabletView viewClassName={styles.Tablet}>
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
                          firstImageFreezing={true}
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
                    <Body parallax={true}/>
                    <Footer/>
                </Freezing>
            </TabletView>
            <MobileOnlyView viewClassName={styles.Mobile}>
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
                          firstImageFreezing={true}
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
                    <Body parallax={true}/>
                    <Footer/>
                </Freezing>
            </MobileOnlyView>
        </div>
    );
}

export default App;
