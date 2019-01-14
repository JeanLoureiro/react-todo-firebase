import { database } from '../api/configFirebase'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const FETCH_TODOS = 'FETCH_TODOS'

// export function addTodo(todo){
//     return{
//         type: ADD_TODO,
//         todo    
//     }
// }

const addCurrentTodo = (todo, id) =>  ({
    type: ADD_TODO, 
    todo,
    id
})


export function addTodo(todo){
    return dispatch => {
        database.collection('todos').add({
            title: todo,
            completed: false
        })
            .then( ( ref ) => dispatch( addCurrentTodo(todo, ref.id) ) )
    }
}

export function toggleTodo(id){
    return{
        type: TOGGLE_TODO,
        id
    }
}


const getTodos = (todos) =>  ({
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

        })
        .then( () =>  dispatch( getTodos(todos) ))
        .catch( (err) => console.log('Could not get collection. Error: ', err) )
    }
}