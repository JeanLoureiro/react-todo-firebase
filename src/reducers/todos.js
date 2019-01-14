import { ADD_TODO, TOGGLE_TODO, FETCH_TODOS } from "../actions/todo"

// const initialState = require('../api')

export default function todos( state = [], action ){

    switch (action.type) {
        case FETCH_TODOS:
            console.log('Reducer Action: ', action)
            console.log('Reducer State: ', state)
            return  action.todos 
            
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    title: action.payload.todo,
                    completed: false
                }
                
            ]

        case TOGGLE_TODO:
            return state.map(
                    todo =>
                    todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
                )
            
        default:
            return state
    }
}
