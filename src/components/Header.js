import React, { Component } from 'react'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETED } from '../actions/filters'
import { connect } from "react-redux";

class Header extends Component{

    render(){
        return(
            <div>
                <ul className='header'>
                    <li><button onClick={ () => this.props.dispatch( {type: SHOW_ALL} ) }>All</button></li>
                    <li><button onClick={ () => this.props.dispatch( {type: SHOW_COMPLETED} ) }>Completed</button></li>
                    <li><button onClick={ () => this.props.dispatch( {type: SHOW_INCOMPLETED} ) }>Incompleted</button></li>
                </ul>
            </div>
        )
    }
}

export default connect()(Header)