export const ADD_TODOLIST = 'ADD-TODOLIST';
export const DELETE_TODOLIST = 'DELETE-TODOLIST';
export const ADD_TASK = 'ADD-TASK';
export const DELETE_TASK = 'DELETE-TASK';
export const CHANGE_TASK = 'CHANGE-TASK';
const inisialState = {
	todolists: [
		{
			id: 0, title: 'Every Day', tasks: [
				{id: 0, title: 'dsagfg'},
				{id: 1, title: 'dfg'},
			]
		},
		{
			id: 1, title: 'Every Week', tasks: [
				{id: 0, title: 'dsdfg'},
			]
		},
		{
			id: 2, title: 'Tomorrow', tasks: [
				{id: 0, title: 'dsagfg'},
				{id: 1, title: 'dsagdfdfdfg'},
			]
		},
	]
};

const reducer = (state = inisialState, action) => {
	switch (action.type) {
		case ADD_TODOLIST:
			return {
				...state,
				todolists: [...state.todolists, action.newTodolist]
			}
		case DELETE_TODOLIST:
			return {
				...state,
				todolists: state.todolists.filter(tl => {
					if (tl.id !== action.todolistId) {
						return tl
					}
				})
			}
		case ADD_TASK:
			return {
				...state,
				todolists: state.todolists.map(tl => {
					if (tl.id === action.todolistId) {
						return {
							...tl,
							tasks: [...tl.tasks, action.newTask]
						}
					} else return tl
				})
			}
		case DELETE_TASK:
			return {
				...state,
				todolists: state.todolists.map(tl => {
					if (tl.id === action.todolistId) {
						return {
							...tl,
							tasks: tl.tasks.filter(task => {
								if (task.id !== action.taskId) {
									return task
								}
							})
						}
					} else return tl
				})
			}
		case CHANGE_TASK:
			return {
				...state,
				todolists: state.todolists.map(tl => {
					if (tl.id === action.todolistId) {
						return {
							...tl,
							tasks: tl.tasks.map(task => {
								if (task.id === action.taskId) {
									return {
										...task, ...action.obj
									}
								}else return task
							})
						}
					} else return tl
				})
			}
	}

return state
}

export const addTodolistAC = (newTodolist) => {
	return {type: ADD_TODOLIST, newTodolist}
}
export const deleteTodolistAC = (todolistId) => {
	return {type: DELETE_TODOLIST, todolistId}
}
export const addTaskAC = (todolistId, newTask) => {
	return {type: ADD_TASK, todolistId, newTask}
}
export const deleteTaskAC = (todolistId, taskId) => {
	return {type: DELETE_TASK, todolistId, taskId}
}
export const changeTaskAC = (todolistId, taskId, obj) => {
	return {type: CHANGE_TASK, todolistId, taskId, obj}
}

export default reducer;