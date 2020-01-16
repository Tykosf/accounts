import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Main from '../Main/Main';
import data from '../../assets/data';
import './index.scss';

class Accounts extends Component{
	constructor(props) {
		super(props);
		this.state = {
			users: data
		}
	}

	addUser = (user) => {
		this.setState({ users: [...this.state.users, user] })
	}
	
	removeUser = (username) => {
		this.setState({ users: this.state.users.filter(item => item.username !== username) }) 
	}

	render() {
		return (
			<div className='accounts'>
				<h3>Accounts</h3>
				<div className='tab__menu'>
					<NavLink to='/overview' className='tab' activeClassName='active'>
						Overview
					</NavLink>
					<NavLink to='/details' className='tab' activeClassName='active'>
						Details
					</NavLink>
				</div>
				<Main 
					users={this.state.users}
					addUser={this.addUser}
					removeUser={this.removeUser}
				/>
			</div>
		)
	}
}

export default Accounts