import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions/todo';

class TodoList extends Component{

    handleToggleTodo = (id) => {
        this.props.dispatch(toggleTodo(id))
    }

    render(){

        const { todos } = this.props

        return(
            <ul>
                {
                    todos.map( (todo) => (
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
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList)