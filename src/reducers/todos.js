import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, READ_DATA } from "../actions/todo"

const initialState = {
    todos: require('../api')
}

export default function reducer( state = initialState, action ){
    console.log('state', state);
    console.log('action', action);
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
        
        // case READ_DATA:
        //     return {
        //         todo: initialState.todos
        //     }
    
        default:
            return state
    }
}
