import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {



	render = (props) => {

		let tasksElements = this.props.tasks.map(e=> <TodoListTask title={e.title} isDone={e.isDone} priority={e.priority}/>)

		return (
			<div className="todoList-tasks">
				{tasksElements}
			</div>
		);
	}
}

export default TodoListTasks;

