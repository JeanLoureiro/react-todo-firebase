export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

let currentId = 2 // this is 2 due to my fake json data under api/index.json

export function addTodo(todo){
    return{
        type: ADD_TODO,
        payload: {
            id: ++currentId,
            todo
        }
    }
}

export function toggleTodo(id){
    return{
        type: TOGGLE_TODO,
        payload: {
            id: id
        }
    }
}