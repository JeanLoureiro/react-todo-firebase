import React, { Component } from 'react';
import LoadingBar from 'react-redux-loading'
import '../App.css'
import Header from './Header'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

class App extends Component {

    render() {
        return (
            <div className="App">
                <LoadingBar />
                <Header />
                <header className="App-header">
                    <AddTodo />
                    <TodoList />
                </header>
            </div>
        );
    }
}

export default App;
