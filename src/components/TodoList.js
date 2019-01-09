import React, { Component } from 'react'
import { connect } from 'react-redux'

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

function mapStateToProps(state){
    //console.log('State: ', state)
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList)