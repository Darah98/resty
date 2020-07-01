import React from 'react';
import ReactJson from 'react-json-view'

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nothing: 'nothing to see here' };
    }
    // prettyHandler = (count, results) => {
    // }
    render() {
        return (
            <>
                <section>
                    <p>Count: {this.props.count}</p>
                    <span>Headers:</span><ReactJson src={this.props.headers} theme="bright"/>
                    <span>Results:</span><ReactJson src={this.props.results} theme="bright"/>
                </section>
            </>
        )
    }
}

export default Results;