import React from 'react';
import './App.css';

class TodoListHeader extends React.Component {

	state = {
		error: true,
		title: '',
	}

	onAddTaskClick = () => {
		let newText = this.state.title;
		this.state.title = '';
		if (newText === '') {
			this.setState({error: true})
		} else {
			this.setState({error: false})
		}
		this.props.addTask(newText);
	}

	onInputChange = (e) => {
		this.setState({error: false, title: e.currentTarget.value})
	}
	onEnterPress = (e) => {
		if (e.key === 'Enter') {
			this.onAddTaskClick();
		}
	}

	render = () => {

		let classForError = this.state.error ? "error" : '';

		return (
			<div className="todoList-header">
				<h3 className="todoList-header__title">What to Learn</h3>
				<div className="todoList-newTaskForm">
					<input value={this.state.title}
						   onChange={this.onInputChange}
						   type="text"
						   className={classForError}
						   placeholder="New task name"
						   onKeyPress={this.onEnterPress}/>
					<button onClick={this.onAddTaskClick}>Add</button>
				</div>
			</div>

		);
	}
}

export default TodoListHeader;

