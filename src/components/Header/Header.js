import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import Button from '../Button/Button';

function Header(props) {
    const {languages, activeLanguage = languages[0], languageButtonType = 'rectangle'} = props;
    const {setLanguage} = props;
    return (
        <div className={styles.Header}>
            <div className={styles.Languages}>
                {
                    languages.map((language, index) => {
                        return (
                            <div key={`language-${index}`}
                                 className={styles.Language}>
                                <Button reference={undefined}
                                        type={languageButtonType}
                                        disabled={language === activeLanguage}
                                        onClick={() => setLanguage(language)}>
                                    {language.toUpperCase()}
                                </Button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

Header.propTypes = {
    languages: PropTypes.array.isRequired,
    setLanguage: PropTypes.func.isRequired,
    activeLanguage: PropTypes.string,
    languageButtonType: PropTypes.string,
}

export default Header;
