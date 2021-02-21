import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Freezing.module.css';

function randomInteger(min, max) {
    const randomInteger = min + Math.random() * (max + 1 - min);
    return Math.floor(randomInteger);
}

function freezing(freezingRef, duration, delay) {
    freezingRef.style.animationDuration = `${duration}s`;
    freezingRef.style.animationDelay = `${delay}s`;
    setTimeout(() => {
        freezingRef.style.animationDuration = '0s';
        freezingRef.style.animationDelay = '0s';
        freezing(freezingRef, randomInteger(8, 12), randomInteger(0, 3));
    }, (duration + delay) * 1000);
}

function Freezing(props) {
    const freezingRefs = useRef([]);
    const {
        fullPageFreezing = false,
        leftHalfPageFreezing = false,
        rightHalfPageFreezing = false,
        firstBlockFreezing = false,
        secondBlockFreezing = false,
        thirdBlockFreezing = false,
        fourthBlockFreezing = false,
        firstHorizontalLineFreezing = false,
        secondHorizontalLineFreezing = false,
        thirdHorizontalLineFreezing = false,
        firstVerticalLineFreezing = false,
        secondVerticalLineFreezing = false,
        children
    } = props;
    useEffect(() => {
        freezingRefs.current.forEach((freezingRef) => {
            freezing(freezingRef, 10, 0);
        });
    }, []);
    return (
        <div className={styles.Freezing}>
            {
                fullPageFreezing && <div ref={(element) => freezingRefs.current[0] = element}
                                         className={styles.FullPageFreezing}/>
            }
            {
                leftHalfPageFreezing && <div ref={(element) => freezingRefs.current[1] = element}
                                             className={styles.LeftHalfPageFreezing}/>
            }
            {
                rightHalfPageFreezing && <div ref={(element) => freezingRefs.current[2] = element}
                                              className={styles.RightHalfPageFreezing}/>
            }
            {
                firstBlockFreezing && <div ref={(element) => freezingRefs.current[3] = element}
                                           className={styles.FirstBlockFreezing}/>
            }
            {
                secondBlockFreezing && <div ref={(element) => freezingRefs.current[4] = element}
                                            className={styles.SecondBlockFreezing}/>
            }
            {
                thirdBlockFreezing && <div ref={(element) => freezingRefs.current[5] = element}
                                           className={styles.ThirdBlockFreezing}/>
            }
            {
                fourthBlockFreezing && <div ref={(element) => freezingRefs.current[6] = element}
                                            className={styles.FourthBlockFreezing}/>
            }
            {
                firstHorizontalLineFreezing && <div ref={(element) => freezingRefs.current[7] = element}
                                                    className={styles.FirstHorizontalLineFreezing}/>
            }
            {
                secondHorizontalLineFreezing && <div ref={(element) => freezingRefs.current[8] = element}
                                                     className={styles.SecondHorizontalLineFreezing}/>
            }
            {
                thirdHorizontalLineFreezing && <div ref={(element) => freezingRefs.current[9] = element}
                                                    className={styles.ThirdHorizontalLineFreezing}/>
            }
            {
                firstVerticalLineFreezing && <div ref={(element) => freezingRefs.current[10] = element}
                                                  className={styles.FirstVerticalLineFreezing}/>
            }
            {
                secondVerticalLineFreezing && <div ref={(element) => freezingRefs.current[11] = element}
                                                   className={styles.SecondVerticalLineFreezing}/>
            }
            {
                children
            }
        </div>
    );
}

Freezing.propTypes = {
    fullPageFreezing: PropTypes.bool,
    leftHalfPageFreezing: PropTypes.bool,
    rightHalfPageFreezing: PropTypes.bool,
    firstBlockFreezing: PropTypes.bool,
    secondBlockFreezing: PropTypes.bool,
    thirdBlockFreezing: PropTypes.bool,
    fourthBlockFreezing: PropTypes.bool,
    firstHorizontalLineFreezing: PropTypes.bool,
    secondHorizontalLineFreezing: PropTypes.bool,
    thirdHorizontalLineFreezing: PropTypes.bool,
    firstVerticalLineFreezing: PropTypes.bool,
    secondVerticalLineFreezing: PropTypes.bool,
}

export default Freezing;
