import { ADD_TODO, TOGGLE_TODO, FETCH_TODOS } from "../actions/todo"

export default function todos( state = {}, action ){

    switch (action.type) {
        case FETCH_TODOS:
            
            return{
                ...state,
                ...action.todos
            }
            
        case ADD_TODO:
            console.log(action.id)

            return {
                ...state,
                [action.id]: {
                    title: action.todo,
                    completed: false
                }
            }
        
            
            

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
