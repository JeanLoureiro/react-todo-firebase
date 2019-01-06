import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, READ_DATA } from "../actions/todo"

const initialState = {
    todos: require('../api')
}

export default function reducer( state = initialState, action ){
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state

            }
        
        case READ_DATA:
            return {
                todo: initialState.todos
            }
    
        default:
            return state
    }
}
