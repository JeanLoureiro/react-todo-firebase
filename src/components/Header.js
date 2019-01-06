import React, { Component } from 'react'

class Header extends Component{
    render(){
        return(
            <div>
                <ul className='header'>
                    <li><button>All</button></li>
                    <li><button>Completed</button></li>
                    <li><button>Incompleted</button></li>
                </ul>
            </div>
        )
    }
}

export default Header