import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter ";

class App extends React.Component {
/*
	constructor(props){
		super(props);

	}*/

state= {
	tasks:[
		{title: 'JS', isDone: true, priority: 'high'},
		{title: 'HTML', isDone: true, priority: 'medium'},
		{title: 'CSS', isDone: true, priority: 'high'},
		{title: 'React', isDone: false, priority: 'low'},
	],

	filterValue: 'All',
}
	addTask = (newText)=>{
		let newTask = {	title: newText, isDone: true, priority: 'low'};
		let newTasks = [...this.state.tasks, newTask];
		this.setState({tasks: newTasks});
	}

	changedFilter = (newFilterValue)=>{
		this.setState({filterValue: newFilterValue});
	}

	changeStatus=(task, isDone)=>{
		let newTasks = this.state.tasks.map(t=>{
			if (task === t){
				return t;}
				else return {...t, isDone:isDone}
		})
		this.setState({tasks: newTasks})
	}

	render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks
						changeStatus={this.changeStatus}
						tasks = {this.state.tasks.filter(t => {
                    	if (this.state.filterValue ==="All"){
                    		return true;
						} if (this.state.filterValue ==="Completed"){
							return t.isDone === true;
						} if (this.state.filterValue ==="Active"){
							return t.isDone === false;
						}
						;
					})}/>
                    <TodoListFooter changeFilter={this.changedFilter} filterValue ={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

