import React from 'react';
import './App.css';

class AddNewItemForm extends React.Component {

	state = {
		error: true,
		title: '',
	}

	onAddItemClick = () => {
		let newText = this.state.title;
		this.state.title = '';
		if (newText === '') {
			this.setState({error: true})
		} else {
			this.setState({error: false})
		}
		this.props.addItem(newText);
	}

	onInputChange = (e) => {
		this.setState({error: false, title: e.currentTarget.value})
	}
	onEnterPress = (e) => {
		if (e.key === 'Enter') {
			this.onAddItemClick();
		}
	}

	render = () => {

		let classForError = this.state.error ? "error" : '';

		return (
				<div className="todoList-newTaskForm">
					<input value={this.state.title}
						   onChange={this.onInputChange}
						   type="text"
						   className={classForError}
						   placeholder="New item name"
						   onKeyPress={this.onEnterPress}/>
					<button onClick={this.onAddItemClick}>Add</button>
				</div>
		);
	}
}

export default AddNewItemForm;

