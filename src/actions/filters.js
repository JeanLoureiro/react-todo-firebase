export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'
export const SHOW_INCOMPLETED = 'SHOW_INCOMPLETED'

export function todosFiltered(todos, filter) {

    switch (filter) {
        case SHOW_ALL:
            return todos
        
        case SHOW_COMPLETED :
            return todos.filter( todo => todo.completed )

        case SHOW_INCOMPLETED:
            return todos.filter( todo => !todo.completed )    
    
        default:
            return todos;
    }
}