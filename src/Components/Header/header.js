import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render(){
        return(
            <>
            <h1>RESTy</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="history">History</NavLink>
                    </li>
                </ul>
            </nav>
            </>
        )
    }
}

export default Header;