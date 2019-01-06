import React, { Component } from 'react';
import '../App.css'
import Header from './Header'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

const data = require('../api')

class App extends Component {
    
    state = {
        todos: []
    }

    componentDidMount(){
        this.setState({
            todos: data
        })
    }
    

    render() {

        const { todos } = this.state

        return (
            <div className="App">
                <Header />
                <header className="App-header">
                    <AddTodo />
                    <TodoList todos={todos} />
                </header>
            </div>
        );
    }
}

export default App;
