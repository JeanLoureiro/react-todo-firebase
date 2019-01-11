import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETED } from '../actions/filters'


export default function filters( state = SHOW_ALL, action){

    switch (action.type) {
        case SHOW_ALL:
            return SHOW_ALL
        
        case SHOW_COMPLETED:
            return SHOW_COMPLETED
            
        case SHOW_INCOMPLETED:
            return SHOW_INCOMPLETED
            
    
        default:
            return state
            
    }
}