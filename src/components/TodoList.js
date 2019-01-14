import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo, fetchTodos } from '../actions/todo';
import { todosFiltered } from "../actions/filters";

class TodoList extends Component{

    componentWillMount(){
        this.props.fetchTodos()
    }

    handleToggleTodo = (id) => {
        this.props.toggleTodo(id)
    }

    render(){

        const { todos, filters } = this.props

        const filtered = todosFiltered(todos, filters)

        return(
            <ul>
                {
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
        toggleTodo : (id) => {
            dispatch ( toggleTodo(id) )
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)