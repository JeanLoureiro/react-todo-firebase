import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo, fetchTodos } from '../actions/todo';
import { todosFiltered } from "../actions/filters";

class TodoList extends Component{


    componentWillMount(){
        this.props.dispatch(fetchTodos())
    }

    handleToggleTodo = (id) => {
        this.props.dispatch(toggleTodo(id))
    }

    render(){

        const { todos, filters } = this.props

        const filtered = todosFiltered(todos, filters)

        return(
            <ul>
                {
                    filtered.map( (todo) => (
                        <li 
                            key={todo.id}
                            id={todo.id}
                            onClick={() => this.handleToggleTodo(todo.id)}
                            style={{textDecoration: todo.completed ? 'line-through' : 'none' }}
                        >
                            {todo.title}
                        </li>
                    ))
                }
            </ul>
        )
    }
}

function mapStateToProps(state){
    console.log("TODO LIST STATE: ", state.todos)
    return {
        todos: state.todos,
        filters: state.filters
    }
}


export default connect(mapStateToProps)(TodoList)