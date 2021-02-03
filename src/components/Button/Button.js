import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button(props) {
    const {reference, type = 'rectangle', disabled = false, children} = props;
    const {onClick} = props;
    return (
        <button ref={reference}
                className={type === 'circle'
                    ? styles.CircleButton
                    : styles.RectangleButton}
                disabled={disabled}
                onClick={onClick}>
            {children}
        </button>
    );
}

Button.propTypes = {
    reference: PropTypes.object,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;
