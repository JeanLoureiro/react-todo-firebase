import { database } from '../api/configFirebase'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const FETCH_TODOS = 'FETCH_TODOS'

let currentId = 2

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


const getTodos = (todos) => ({
    type: FETCH_TODOS, 
    todos
})

export function fetchTodos(){
    return dispatch => {
        const todos = []

        database.collection('todos').get()
        .then((snapshot) => {
            

            snapshot.forEach( (todo) => {
                
                var todoItem = {
                    title: todo.data().title,
                    completed: todo.data().completed
                }

                todos[todo.id] = todoItem

            })

            console.log('Fetch Todos from Firebase ', todos)
            
        })
        .then( () => console.log('then: ', todos) || dispatch( getTodos(todos) ))
        .catch( (err) => console.log('Could not get collection. Error: ', err) )
    }
}