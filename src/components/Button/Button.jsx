import React from 'react';
import './index.scss';

function Button({ showIcon, children, styles, handleClick, className }) {
	return (
		<button className={className || 'add-button'} style={styles} onClick={handleClick}>
			{showIcon && <i className='fas fa-plus-circle'></i>}
			{children}
		</button>	
	)
}

export default Button