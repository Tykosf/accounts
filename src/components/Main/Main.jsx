import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Overview from '../Overview/Overview';
import Details from '../Details/Details';

function Main({ users, addUser, removeUser }) {
	return (
		<Switch>
			<Route exact path='/' render={() => <Redirect to='/overview' /> } />
			<Route path='/overview'>
				<Overview 
					users={users}
					addUser={addUser}
				/>
			</Route>
			<Route path='/details'>
				<Details  
					users={users}
					addUser={addUser}
					removeUser={removeUser}
				/>
			</Route>
		</Switch>
	)
}

export default Main