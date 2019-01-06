import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component{


    componentDidMount(){
        console.log('Props: ', this.props)
        // this.props.dispatch({ type: 'READ_DATA' })
    }

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
    console.log('State: ', state)
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList)