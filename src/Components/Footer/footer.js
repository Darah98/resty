import React from 'react';
import './footer.scss';

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div id='footer'>
                <p>&copy; CodeFellows 2020</p>
            </div>
        )
    }
}

export default Footer;