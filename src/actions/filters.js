export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'
export const SHOW_INCOMPLETED = 'SHOW_INCOMPLETED'

export function todosFiltered(todos, filter) {
    switch (filter) {
        case SHOW_ALL:
            return todos
        
        case SHOW_COMPLETED :
            return Object.keys(todos)
                .filter( id => todos[id].completed )
                .reduce( (out, key) => {
                    out[key] = todos[key]
                    
                    return out
                }, {} )

        case SHOW_INCOMPLETED:
            return Object.keys(todos)
                .filter( id => !todos[id].completed )
                .reduce( (out, key) => {
                    out[key] = todos[key]
                    
                    return out
                }, {} )


        default:
            return todos;
    }
}