import React from 'react';
import './form.scss';

class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = { url: '', method: 'get', request: {}, reqbody: {} }
        if (!JSON.parse(localStorage.getItem('history'))) {
            localStorage.setItem('history', JSON.stringify(this.history));
        }
    }
    submitHandler = async (e) => {
        e.preventDefault();
        if (this.state.method && this.state.url) {
            let request = { url: this.state.url, method: this.state.method };
            let url = '';
            let method = '';
            this.setState({ request, url, method });
            e.target.reset();
            if (this.state.method === 'get') {
                await this.getReq(e);
            } else if (this.state.method === 'post' || this.state.method == 'put') {
                await this.updateReq(e);
            } else if (this.state.method === 'delete') {
                await this.deleteReq(e);
            }
        } else {
            alert('Please insert url and method');
        }
        this.props.history(this.savedHistory);
    }
    changeHandler = (e) => {
        const url = e.target.value;
        this.setState({ url });
    }
    selectHandler = (e) => {
        const method = e.target.id;
        this.setState({ method });
    }
    bodyHandler = (e) => {
        const reqbody = e.target.value;
        this.setState({ reqbody });
    }
    history = [];
    getReq = async (e) => {
        try {
            const rawData = await fetch(this.state.url);
            const jsonData = await rawData.json();
            const resHeaders = await rawData.headers.get('Content-Type');
            this.history.push({ request: this.state.request, response: jsonData });
            localStorage.setItem('history', JSON.stringify(this.history));
            this.props.handler(jsonData, resHeaders);
        } catch (e) {
            console.error(e);
        }
    }
    updateReq = async (e) => {
        try {
            const bodyObj = {
                body: JSON.stringify(this.state.reqbody),
                headers: { "Content-Type": "application/json" },
                method: this.state.method,
            }
            const rawData = await fetch(this.state.url, bodyObj);
            const jsonData = await rawData.json();
            const resHeaders = await rawData.headers.get('Content-Type');
            this.history.push({ request: this.state.request, response: jsonData });
            localStorage.setItem('history', JSON.stringify(this.history));
            this.props.handler(jsonData, resHeaders);
        } catch (e) {
            console.error(e);
        }
    }
    deleteReq = async (e) => {
        try {
            const obj = {
                headers: { "Content-Type": "application/json" },
                method: this.state.method,
            }
            const rawData = await fetch(this.state.url, obj);
            const jsonData = await rawData.json();
            const resHeaders = await rawData.headers.get('Content-Type');
            this.history.push({ request: this.state.request, response: jsonData });
            localStorage.setItem('history', JSON.stringify(this.history));
            this.props.handler(jsonData, resHeaders);
        } catch (e) {
            console.error(e);
        }
    }
    savedHistory = JSON.parse(localStorage.getItem('history'));
    render() {
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <div><label htmlFor="url">URL:  </label>
                        <input id='url' type='text' placeholder='Enter URL here' onChange={this.changeHandler}></input>
                        <p id="ex">example: https://swapi.dev/api/people/</p>
                        <button id='go' type='submit'>GO!</button>
                        <p>Please select your method:</p>
                        <input type="radio" id="get" name="method" value="get" onClick={this.selectHandler}></input>
                        <label htmlFor="get">GET</label>
                        <input type="radio" id="post" name="method" value="post" onClick={this.selectHandler}></input>
                        <label htmlFor="post">POST</label>
                        <input type="radio" id="put" name="method" value="put" onClick={this.selectHandler}></input>
                        <label htmlFor="put">PUT</label>
                        <input type="radio" id="delete" name="method" value="delete" onClick={this.selectHandler}></input>
                        <label htmlFor="delete">DELETE</label>
                    </div>
                    <div>
                        <label htmlFor="requestBody">Body:</label>
                        <textarea id="requestBody" rows="8" cols="80" onChange={this.bodyHandler}></textarea>
                    </div>
                </form>
                <div id="lowersection">
                    <div id="formResult"><span>Request:</span><span> {this.state.method}</span><span>{this.state.url}</span>
                    </div>
                    <div id="historySection"><label htmlFor="history">History</label>
                        <ul id="history">
                            {this.history.map((data, index) => {
                                return <li key={index}>Method: {data.request.method} <br></br> URL: {data.request.url}</li>
                            })}
                        </ul></div>
                </div>
            </>
        )
    }

}

export default Form;