import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from "../actions/todo"

class AddTodo extends Component{

    state = {
        todo: ''
    }

    handleOnChange = (e) => {
        const { name, value } = e.target

        this.setState( () => ({
            [name] : value
        }))

    }
    handleAddTodo = () => {

        const { todo } = this.state

        this.props.dispatch(addTodo(todo))

        this.setState({ todo: '' })
    }


    render(){

        const { todo } = this.state

        return(
            <div>
                <input type='text' value={ todo } name='todo' onChange={ this.handleOnChange }/>
                <button onClick={this.handleAddTodo}>Add Todo</button>
            </div>
        )
    }
}

export default connect()(AddTodo)