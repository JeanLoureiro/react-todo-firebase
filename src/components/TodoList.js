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
                    // filtered.map( (todo) => (
                    Object.keys(filtered).map( ( todo ) => (    
                        <li 
                            key={todo}
                            id={todo}
                            onClick={() => this.handleToggleTodo(todo)}
                            style={{textDecoration: filtered[todo].completed ? 'line-through' : 'none' }}
                        >
                            {filtered[todo].title}
                        </li>
                    ))
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("TODO LIST STATE: ", state.todos)
    return {
        todos: state.todos,
        filters: state.filters
    }
}


export default connect(mapStateToProps)(TodoList)