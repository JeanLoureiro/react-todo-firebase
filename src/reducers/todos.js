import { ADD_TODO, TOGGLE_TODO, FETCH_TODOS } from "../actions/todo"

// const initialState = require('../api')

export default function todos( state = [], action ){

    switch (action.type) {
        case FETCH_TODOS:
            
            return{
                ...state,
                ...action.todos
            }
            
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
            var todos = {}
            Object.keys(state).map(
                    ( todo ) => todo === action.id 
                    ? todos[todo] = { 
                        ...state[todo],
                        completed: !state[todo].completed 
                    } 
                    : todos[todo] = state[todo]
                )
            
            return todos
                
            
        default:
            return state
    }
}
