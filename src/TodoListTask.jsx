import React from 'react';
import './App.css';

class TodoListTask extends React.Component {

	state = {
		editMode: false,
	}
	activeEditMode = () => {
		this.setState({editMode: true})
	}
	deactivetedEditMode = () => {
		this.setState({editMode: false})
	}
	onIsDoneChenged = (e) => {
		this.props.changeStatus(this.props.task.id, e.currentTarget.checked)
	}
	onIsTitleChanged = (e) => {
		this.props.changeTitle(this.props.task.id, e.currentTarget.value)
	}
	onDeleteTask = ()=>{
		this.props.deleteTask(this.props.task.id)
	}

	render = (props) => {

		let classForDone = this.props.task.isDone ? 'todoList-task done' : 'todoList-task'

		return (
			<div className="todoList-tasks">
				<div className={classForDone}>
					<input type="checkbox"
						   checked={this.props.task.isDone}
						   onChange={this.onIsDoneChenged}/>
					{this.state.editMode
						? <input onBlur={this.deactivetedEditMode}
								 onChange={this.onIsTitleChanged}
								 autoFocus={true}
								 value={this.props.task.title}/>
						: <span onClick={this.activeEditMode}>{this.props.task.id}-{this.props.task.title}</span>
					}, priority: {this.props.task.priority}
					<button onClick={this.onDeleteTask}>x</button>

				</div>
			</div>
		);
	}
}

export default TodoListTask;

