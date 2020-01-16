import React from 'react';
import './index.scss';

function Line({ username, email, phone, onDelete }) {
	return (
		<div className='line'>
			<span>{username}</span>
			<div className='right'>
				<div className='right__container'>Email: <span className='right__text'>{email}</span></div>
				<div className='right__container'>Phone: <span className='right__text'>{phone}</span></div>
				<i className='far fa-trash-alt' onClick={onDelete.bind(this, username)}></i>
			</div>
		</div>
	)
}

export default Line