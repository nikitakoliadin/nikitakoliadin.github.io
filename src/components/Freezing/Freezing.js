import React from 'react';
import PropTypes from 'prop-types';
import styles from './Freezing.module.css';

function Freezing(props) {
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
    return (
        <div className={styles.Freezing}>
            {
                fullPageFreezing && <div className={styles.FullPageFreezing}/>
            }
            {
                leftHalfPageFreezing && <div className={styles.LeftHalfPageFreezing}/>
            }
            {
                rightHalfPageFreezing && <div className={styles.RightHalfPageFreezing}/>
            }
            {
                firstBlockFreezing && <div className={styles.FirstBlockFreezing}/>
            }
            {
                secondBlockFreezing && <div className={styles.SecondBlockFreezing}/>
            }
            {
                thirdBlockFreezing && <div className={styles.ThirdBlockFreezing}/>
            }
            {
                fourthBlockFreezing && <div className={styles.FourthBlockFreezing}/>
            }
            {
                firstHorizontalLineFreezing && <div className={styles.FirstHorizontalLineFreezing}/>
            }
            {
                secondHorizontalLineFreezing && <div className={styles.SecondHorizontalLineFreezing}/>
            }
            {
                thirdHorizontalLineFreezing && <div className={styles.ThirdHorizontalLineFreezing}/>
            }
            {
                firstVerticalLineFreezing && <div className={styles.FirstVerticalLineFreezing}/>
            }
            {
                secondVerticalLineFreezing && <div className={styles.SecondVerticalLineFreezing}/>
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
