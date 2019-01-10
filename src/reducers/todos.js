import { ADD_TODO, TOGGLE_TODO } from "../actions/todo"

const initialState = {
    todos: require('../api')
}

export default function reducer( state = initialState, action ){
    console.log('Store state', state);
    console.log('Store action', action);
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat({
                    id: action.payload.id,
                    title: action.payload.todo,
                    completed: false
                })
                
            }

        case TOGGLE_TODO:

            return {
                ...state,
                todos: state.todos.map(
                    todo =>
                    todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
                )
            }
    
        default:
            return state
    }
}
