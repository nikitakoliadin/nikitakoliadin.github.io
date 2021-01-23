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
                    greetingLetters.map((greetingLetter, index) => (
                        <Parallax key={`greeting-${index}`}
                                  x={[
                                      (centralize ? -size : 0) * (index - Math.floor(greeting.length / 2)),
                                      size * (index - Math.floor(greeting.length / 2))
                                  ]}
                                  className={styles.Latter}>
                            {greetingLetter}
                        </Parallax>
                    ))
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
