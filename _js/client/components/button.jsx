/* eslint-disable indent */
import React, { PropTypes } from 'react';

const Button = ({ action, actionLabel }) => <button onClick={action}>{actionLabel}</button>;

Button.propTypes = {
    action: PropTypes.func.isRequired,
    actionLabel: PropTypes.string.isRequeired,
};

export default Button;
