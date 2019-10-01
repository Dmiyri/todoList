import React from 'react';
import './App.css';
import TodoListTitle from "./TodoListTitle";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter ";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTaskAC, changeTaskAC, deleteTaskAC, deleteTodolistAC} from "./redux/Reducer";

class TodoList extends React.Component {
	constructor(props) {
		super(props);

	}

	newTaskId = 1;
	state = {
		tasks: [],
		filterValue: 'All',
	}
	onAddTask = (newText) => {
		let newTask = {
			id: this.newTaskId,
			title: newText,
			isDone: true,
			priority: 'low'
		};
		this.newTaskId++;
		this.props.addTask(this.props.id, newTask)
	}

	changedFilter = (newFilterValue) => {
		this.setState({filterValue: newFilterValue});
	}

	onChangeTask = (taskId, obj) => {
		/*let newTasks = this.state.tasks.map(t => {
			if (t.id !== taskId) {
				return t;
			} else return {...t, ...obj}
		})*/
		this.props.changeTask(this.props.id, taskId, obj)
	}
	changeStatus = (taskId, isDone) => {
		this.onChangeTask(taskId, {isDone: isDone})
	}
	changeTitle = (taskId, NewTitle) => {
		this.onChangeTask(taskId, {title: NewTitle})
	}
	onDeleteTodolist = () => {
		this.props.deleteTodolist(this.props.id);
	}

	onDeleteTask = (taskId) => {
		this.props.deleteTask(this.props.id, taskId);
	}

	render = () => {

		return (
			<div className="App">
				<div className="todoList">
					<div>
						<TodoListTitle title={this.props.title}/>
						<AddNewItemForm addItem={this.onAddTask}/>
						<button onClick={this.onDeleteTodolist}>x</button>
					</div>
					<TodoListTasks
						changeStatus={this.changeStatus}
						changeTitle={this.changeTitle}
						onDeleteTask={this.onDeleteTask}
						tasks={this.props.tasks.filter(t => {
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

const mapStateToProps = (state) => {
	return {todolists: state.todolists}
}
const mapDispatchToProps = (dispatch) => {
	return {
		deleteTodolist: (todolistId) => {
			dispatch(deleteTodolistAC(todolistId))
		},
		addTask: (todolistId, newTask) => {
			dispatch(addTaskAC(todolistId, newTask))
		},
		deleteTask: (todolistId, taskId)=>{
			dispatch(deleteTaskAC(todolistId, taskId))
		},
		changeTask: (todolistId,taskId, obj)=>{
			dispatch(changeTaskAC(todolistId,taskId, obj))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

