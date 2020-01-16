import React, { Component } from 'react';
import Button from '../Button/Button';
import Line from '../Line/Line';
import AddForm from '../AddForm/AddForm';
import './index.scss';

class Details extends Component {
	constructor(props){
		super(props);
		this.state = {
			toolTip: false,
			showModal: false
		}
	}

	toggleShow = (event) => {
		event.preventDefault();
		this.setState({ showModal: !this.state.showModal })
	}

	toggleToolTip = () => {
		this.setState({ toolTip: !this.state.toolTip })
	}
	
	render() {
		return (
			<div className='details'>
				<div className='list__header'>
					<p className='title'>
						List 
						<i 
							className='fas fa-info-circle' 
							style={this.state.toolTip ? { color: '#4a4a4a' } : undefined} 
							onClick={this.toggleToolTip}>
						</i> 
					</p>
					{this.state.toolTip && <span className='tooltip'>Account list</span>}
				</div>
				<div className='list__content'>			
					{this.props.users.map(item => <Line key={item.username} {...item} onDelete={this.props.removeUser}/>)}
				</div>
				<Button showIcon={true} handleClick={this.toggleShow}>Add account</Button>
				{this.state.showModal && 
					<AddForm 
						onSubmit={this.onSubmit} 
						onCancel={this.toggleShow}
						addUser={this.props.addUser}
					/>
				}
			</div>
		)
	}
};

export default Details