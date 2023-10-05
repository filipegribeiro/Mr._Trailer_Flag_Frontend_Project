import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';
import Button from './Button';

const OutlineButton = props => {
	return (
		<Button className={`btn-outline ${props.className}`} onClick={props.onClick ? () => props.onClick() : null}>
			{props.children}
		</Button>
	);
};

OutlineButton.propTypes = {
	onClick: PropTypes.func,
};

export default OutlineButton;
