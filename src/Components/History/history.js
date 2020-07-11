import React from 'react';

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <ul>
                    {this.props.localhistory.map((data, index) => {
                        return <li key={index}>
                            Method: {data.request.method}
                            URL: {data.request.url}
                            Response: {JSON.stringify(data.response.results)}
                        </li>
                    })}
                </ul>
            </>
        )
    }
}

export default History;