import React from 'react';
import PropTypes from 'prop-types';
import styles from './Greeting.module.css';
import {Parallax} from 'react-scroll-parallax';

function Greeting(props) {
    const {greeting, centralize = false, size = window.innerWidth / 2} = props;
    const greetingLetters = greeting.split('');
    return (
        <div className={styles.Greeting}>
            <div className={styles.Letters}>
                {
                    greetingLetters.map((greetingLetter, index) => {
                        let x1 = (centralize ? -size : 0) * (greetingLetters.length % 2 === 0
                            ? ((index >= greetingLetters.length / 2 ? index + 1 : index) - (greetingLetters.length / 2))
                            : (index - Math.floor(greeting.length / 2)));
                        let x2 = size * (greetingLetters.length % 2 === 0
                            ? ((index >= greetingLetters.length / 2 ? index + 1 : index) - (greetingLetters.length / 2))
                            : (index - Math.floor(greeting.length / 2)));
                        x1 = x1 > 0
                            ? x1 - (greetingLetters.length % 2 === 0 ? size / 2 : 0)
                            : x1 + (greetingLetters.length % 2 === 0 ? size / 2 : 0);
                        x2 = x2 > 0
                            ? x2 - (greetingLetters.length % 2 === 0 ? size / 2 : 0)
                            : x2 + (greetingLetters.length % 2 === 0 ? size / 2 : 0);
                        const x = [
                            x1,
                            x2
                        ];
                        return (
                            <Parallax key={`greeting-${index}`}
                                      x={x}
                                      className={styles.Latter}>
                                {greetingLetter}
                            </Parallax>
                        );
                    })
                }
            </div>
        </div>
    );
}

Greeting.propTypes = {
    greeting: PropTypes.string.isRequired,
    centralize: PropTypes.bool,
    size: PropTypes.number,
}

export default Greeting;
