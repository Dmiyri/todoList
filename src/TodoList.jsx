import React from 'react';
import './App.css';
import TodoListTitle from "./TodoListTitle";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter ";
import AddNewItemForm from "./AddNewItemForm";

class TodoList extends React.Component {
	constructor(props) {
		super(props);

	}

	newTaskId = 1;
	state = {
		tasks: [],
		filterValue: 'All',
	}
	addTask = (newText) => {
		let newTask = {
			id: this.newTaskId++,
			title: newText,
			isDone: true,
			priority: 'low'
		};
		let newTasks = [...this.state.tasks, newTask];
		this.setState({tasks: newTasks}, () => {
			this.saveState()
		});
	}

	changedFilter = (newFilterValue) => {
		this.setState({filterValue: newFilterValue}, () => {
			this.saveState()
		});
	}

	changeTask = (taskId, obj) => {
		let newTasks = this.state.tasks.map(t => {
			if (t.id !== taskId) {
				return t;
			} else return {...t, ...obj}
		})
		this.setState({tasks: newTasks}, () => {
			this.saveState()
		})
	}

	changeStatus = (taskId, isDone) => {
		this.changeTask(taskId, {isDone: isDone})
	}

	changeTitle = (taskId, NewTitle) => {
		this.changeTask(taskId, {title: NewTitle})
	}

	saveState = () => {
		let stateAsString = JSON.stringify(this.state);
		localStorage.setItem('our-state'+ this.props.id, stateAsString);
	}

	restoreState = () => {
		let state = {
			tasks: [],
			filterValue: 'All',
		}
		let stateAsString = localStorage.getItem('our-state'+ this.props.id);
		if (stateAsString != null) {
			state = JSON.parse(stateAsString);
		}
		state.tasks.map(t => {
			if (t.id >= this.newTaskId) {
				this.newTaskId = t.id + 1;
			}
		})
		this.setState(state);

	}

	componentDidMount() {
		this.restoreState();
	}

	render = () => {

		return (
			<div className="App">
				<div className="todoList">
					<div>
					<TodoListTitle title={this.props.title}/>
					<AddNewItemForm addItem={this.addTask}/>
					</div>
					<TodoListTasks
						changeStatus={this.changeStatus}
						changeTitle={this.changeTitle}
						tasks={this.state.tasks.filter(t => {
							if (this.state.filterValue === "All") {
								return true;
							}
							if (this.state.filterValue === "Completed") {
								return t.isDone === true;
							}
							if (this.state.filterValue === "Active") {
								return t.isDone === false;
							}
							;
						})}/>
					<TodoListFooter changeFilter={this.changedFilter} filterValue={this.state.filterValue}/>
				</div>
			</div>
		);
	}
}

export default TodoList;

