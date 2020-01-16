import React, { Component } from 'react';
import Button from '../Button/Button';
import './index.scss';

class AddForm extends Component{
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			phone: '',
			inputError: false
		};
	}	
	
	handleChange = (event, field) => {
		this.setState({ [field]: event.target.value })
	}

	separateString = (str) => {
		return [str.substring(0,3), str.substring(3, 5), str.substring(5,8), str.substring(8,10)];
	}


	onSubmit = (event) => {
		event.preventDefault();
		let { username, email, phone } = this.state; 
		const containNumbers = /\d/;
		const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
		if(username.trim().length && phone.length >= 10 && !containNumbers.test(username) && emailFormat.test(email) && Number(phone)) {
			phone = this.separateString(phone).join('-');
			this.props.addUser({ username, email, phone });
			this.props.onCancel(event);
		}
		else {
			if(!this.state.inputError){
				this.setState({ inputError: !this.state.inputError })
			}
		}
	}

	render() {
		const { username, email, phone } = this.state;
		return (
			<div className='container'>
				<form className='add__form'>
					<input 
						className='add__form__field' 
						value={username} 
						onChange={(e) => this.handleChange(e, 'username')}
						type='text' 
						placeholder='username' 
					/>
					<input 
						className='add__form__field' 
						value={email}
						onChange={(e) => this.handleChange(e, 'email')} 
						type='email'
						placeholder='example@gmail.com' 
					/>
					<input 
						className='add__form__field' 
						value={phone}
						onChange={(e) => this.handleChange(e, 'phone')} 
						type='phone' 
						placeholder='0672104531' 
					/>
					{this.state.inputError && <span className='add__form__field--error'>
						Перевірте чи Ви правильно ввели дані!
					</span>}
					<div className='add__form__buttons'>
						<Button className='submit' handleClick={(e) => this.onSubmit(e)}>
							Save
						</Button>
						<Button className='cancel' handleClick={this.props.onCancel}>
							Cancel
						</Button>
					</div>
				</form>
			</div>
		)
	}
}

export default AddForm