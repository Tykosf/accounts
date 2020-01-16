import React from 'react';
import Card from '../Card/Card';
import './index.scss';

function Overview({ users }) {
		return (
		<div className='overview'>
			{users.map(item => <Card key={item.username} {...item}/>)}
		</div>
		)
}

export default Overview