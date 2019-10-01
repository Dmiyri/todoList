import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTodolistAC} from "./redux/Reducer";


class App extends React.Component {

	newTodoListsId = 0 ;
	onAddTodoList = (title) => {
		let newTodoList = {
			id: this.newTodoListsId,
			title: title,
			tasks: []
		};
		this.newTodoListsId++;
		this.props.addTodolist(newTodoList);
	}

	render = () => {
		const todoLists = this.props.todolists.map(tl => <TodoList id={tl.id}
																   title={tl.title}
																   tasks={tl.tasks}/>)
		return (
			<div>
				<div>
					<AddNewItemForm addItem={this.onAddTodoList}/>
				</div>
				<div className="App">
					{todoLists}
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		todolists: state.todolists
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTodolist: (newTodolist) => {
			dispatch(addTodolistAC(newTodolist))
		},
	}
};


const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
