import { ADD_TODO, TOGGLE_TODO } from "../actions/todo"

const initialState = require('../api')

export default function todos( state = initialState, action ){

    // console.log('state: ', state)

    switch (action.type) {
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
