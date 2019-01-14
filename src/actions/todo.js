import { database } from '../api/configFirebase'
import { showLoading, hideLoading } from 'react-redux-loading'


export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const FETCH_TODOS = 'FETCH_TODOS'

const addCurrentTodo = (todo, id) =>  ({
    type: ADD_TODO, 
    todo,
    id
})


export function addTodo(todo){
    return dispatch => {
        dispatch( showLoading() )

        return database.collection('todos').add({
            title: todo,
            completed: false
            })
            .then( ( ref ) => dispatch( addCurrentTodo(todo, ref.id) ) )
            .then( () => dispatch( hideLoading () ) )
    }
}

export function toggleCurrentTodo(id){
    return{
        type: TOGGLE_TODO,
        id
    }
}

export function toggleTodo( id, completed ){

    return dispatch => {
        database.collection('todos').doc(id).update({
            completed: !completed
        })
        .then( () => dispatch( toggleCurrentTodo( id )) )
    }
}


const getTodos = (todos) =>  ({
    type: FETCH_TODOS, 
    todos
})

export function fetchTodos(){
    return dispatch => {
        const todos = []

        dispatch( showLoading() )

        return database.collection('todos').get()
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
        .then( () => dispatch( hideLoading () ) )
        .catch( (err) => console.log('Could not get collection. Error: ', err) )
    }
}