import React, { Component } from 'react'

class TodoList extends Component{

    render(){

        const { todos } = this.props

        return(
            <ul>
                {
                    todos.map( (todo) => (
                        <li key={todo.id}>{todo.title}</li>
                    ))
                }
            </ul>
        )
    }
}

export default TodoList