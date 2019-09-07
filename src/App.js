import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";

class App extends React.Component {

	constructor(props) {
		super(props);

	}

	newTodoListsId = 1;
	state = {
		todolists: [],
	}

	addTodoList=(NewTitle)=>{
			let newTask = {
				id: this.newTodoListsId,
				title: NewTitle,
			};
			let newTasks = [...this.state.todolists, newTask];
			this.setState({todolists: newTasks}, ()=>{this.saveState()})
				this.newTodoListsId++;
			};

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
		const todoLists = this.state.todolists.map(tl => <TodoList id={tl.id} title={tl.title}/>)
		return (
			<div>
				<div>
					<AddNewItemForm addItem={this.addTodoList}/>
				</div>
				<div className="App">
					{todoLists}
				</div>
			</div>
		);
	}
}

export default App;

