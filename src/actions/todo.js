export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const READ_DATA = 'READ_DATA'


let currentId = 3

export function addTodo(todo){
    return{
        type: ADD_TODO,
        payload: {
            id: ++currentId,
            todo
        }
    }
}