import React from 'react';
import PropTypes from 'prop-types';
import styles from './LinearX.module.css';
import {Parallax} from 'react-scroll-parallax';

function LinearX(props) {
    const {letters, centralize = false, size = window.innerWidth / 2} = props;
    const splitLetters = letters.split('');
    return (
        <div className={styles.Letters}>
            {
                splitLetters.map((splitLetter, index) => {
                    let x1 = (centralize ? -size : 0) * (splitLetters.length % 2 === 0
                        ? ((index >= splitLetters.length / 2 ? index + 1 : index) - (splitLetters.length / 2))
                        : (index - Math.floor(letters.length / 2)));
                    let x2 = size * (splitLetters.length % 2 === 0
                        ? ((index >= splitLetters.length / 2 ? index + 1 : index) - (splitLetters.length / 2))
                        : (index - Math.floor(letters.length / 2)));
                    x1 = x1 > 0
                        ? x1 - (splitLetters.length % 2 === 0 ? size / 2 : 0)
                        : x1 + (splitLetters.length % 2 === 0 ? size / 2 : 0);
                    x2 = x2 > 0
                        ? x2 - (splitLetters.length % 2 === 0 ? size / 2 : 0)
                        : x2 + (splitLetters.length % 2 === 0 ? size / 2 : 0);
                    const x = [
                        x1,
                        x2
                    ];
                    return (
                        <Parallax key={`letter-${index}`}
                                  x={x}
                                  className={styles.Letter}>
                            {splitLetter}
                        </Parallax>
                    );
                })
            }
        </div>
    );
}

LinearX.propTypes = {
    letters: PropTypes.string.isRequired,
    centralize: PropTypes.bool,
    size: PropTypes.number,
}

export default LinearX;
