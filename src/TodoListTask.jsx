import React from 'react';
import './App.css';

class TodoListTask extends React.Component {

	onIsDoneChenged = (e) => {
		this.props.changeStatus(this.props.task, e.currentTarget.checked)
	}

	render = (props) => {

		let classForDone = this.props.task.isDone ? 'todoList-task done':'todoList-task'

		return (
			<div className="todoList-tasks">
				<div className={classForDone}>
					<input type="checkbox"
						   checked={this.props.task.isDone}
						   onChange={this.onIsDoneChenged}/>
					<span>{this.props.task.title}</span>
					, priority: {this.props.task.priority}
				</div>
			</div>
		);
	}
}

export default TodoListTask;

