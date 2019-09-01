import React from 'react';
import './App.css';

class TodoListTask extends React.Component {

onIsDoneChenged = ()=>{
	this.props.changeStatus()
}

	render = (props) => {


		return (
			<div className="todoList-tasks">
				<div className="todoList-task">
					<input type="checkbox" checked={this.props.task.isDone}
					onChange={this.onIsDoneChenged}/>
					<span>{this.props.task.title}</span>
					, priority: {this.props.task.priority}
				</div>
			</div>
		);
	}
}

export default TodoListTask;

