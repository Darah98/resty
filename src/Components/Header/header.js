import React from 'react';
import './header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render(){
        return(
            <nav>
                <h1>RESTy</h1>
            </nav>
        )
    }
}

export default Header;