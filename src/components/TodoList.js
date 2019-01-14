import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo, fetchTodos } from '../actions/todo';
import { todosFiltered } from "../actions/filters";

class TodoList extends Component{

    componentWillMount(){
        this.props.fetchTodos()
    }

    handleToggleTodo = (id, completed) => {
        this.props.toggleTodo(id, completed)
    }

    render(){

        const { todos, filters } = this.props

        const filtered = todosFiltered(todos, filters)

        return(
            <ul>
                {
                    Object.keys(filtered).map( ( id ) => (    
                        <li 
                            key={id}
                            id={id}
                            onClick={() => this.handleToggleTodo( id, filtered[id].completed )}
                            style={{textDecoration: filtered[id].completed ? 'line-through' : 'none' }}
                        >
                            {filtered[id].title}
                        </li>
                    ))
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        filters: state.filters
    }
}

const mapDispatchToProps = ( dispatch ) =>{
    return {
        fetchTodos: () => {
            dispatch( fetchTodos() )
        },
        toggleTodo : (id, completed) => {
            dispatch ( toggleTodo(id, completed) )
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)