import React from 'react';
import Button from '../Button/Button';
import { withRouter } from 'react-router-dom';
import './index.scss';


class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hovered: false
		}
	}

	toggleHovered = () => {
		this.setState({ hovered: !this.state.hovered })
	}

	handleRedirect = () => {
		this.props.history.push('/details')
	}

	render() {
		const { hovered } = this.state; 
		const { username, email, phone } = this.props;
		const buttonStyles = { 
			width: '100px', 
			height: '34px',
			borderColor: '#fff',
			backgroundColor: '#ffb000',
			color: '#fff',
			marginTop: '0px'
		};
		return (
			<div className='card' onMouseEnter={this.toggleHovered} onMouseLeave={this.toggleHovered}>
				{
					!hovered ? 	
						<>
							<i className='far fa-id-card'></i>
							<p>{username}</p>
						</>
					: 
						<div className='info'>
							<span className='field'>
								Email: 
								<span className='field__text'>{email}</span>
							</span>
							<span className='field'>
								Phone: 
								<span className='field__text'>{phone}</span>
							</span>
							<Button styles={buttonStyles} handleClick={this.handleRedirect}>
								Details
							</Button>
						</div>
				}
			</div>

		)
	}
}

export default withRouter(Card)