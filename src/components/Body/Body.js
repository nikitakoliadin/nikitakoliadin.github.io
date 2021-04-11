import React from 'react';
import PropTypes from 'prop-types';
import styles from './Body.module.css';
import localizations from '../../localizations/localizations';
import LinearX from '../LinearX/LinearX';

function Body(props) {
    const {parallax = false} = props;

    function split(sentence) {
        return sentence.split(' ').map((word, index) => {
            return (
                <div key={index}
                     className={styles.Text}>
                    {
                        parallax
                            ? <LinearX letters={word}
                                       centralize={true}
                                       size={window.innerWidth / 25}/>
                            : <div className={styles.Container}>
                                {word}
                            </div>
                    }
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
            <div className={styles.Contacts}>
                {
                    split(localizations.contacts.toUpperCase())
                }
            </div>
            <div className={styles.Empty}/>
        </div>
    );
}

Body.propTypes = {
    parallax: PropTypes.bool,
}

export default Body;
