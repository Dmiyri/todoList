import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {



	render = (props) => {

		let tasksElements = this.props.
		tasks.map(e=> <TodoListTask changeStatus={this.props.changeStatus}
									deleteTask={this.props.onDeleteTask}
																   changeTitle={this.props.changeTitle}
																   task={e}/>)

		return (
			<div className="todoList-tasks">
				{tasksElements}
			</div>
		);
	}
}

export default TodoListTasks;

