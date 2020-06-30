import React from 'react';
import './form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = { url: '', method: '', request: {} }
    }

    submitHandler = (e) => {
        e.preventDefault();
        if(this.state.method && this.state.url){
            let request= { url: this.state.url, method:this.state.method};
            let url= '';
            let method= '';
            this.setState({request, url, method});
            e.target.reset();
        } else {
            alert('Please insert url and method');
        }
    }
    changeHandler = (e) => {
        const url = e.target.value;
        this.setState({ url });
        console.log(url);
    }
    selectHandler = (e) => {
        const method = e.target.id;
        this.setState({method});
        console.log(method);
    }

    render() {
        return (
            <>
            <form onSubmit={this.submitHandler}>
                <label htmlFor="url">URL:  </label>
                <input id='url' type='text' placeholder='Enter URL here' onChange={this.changeHandler}></input>
                <button id='go' type='submit'>GO!</button>
                <p>Please select your method:</p>
                <input type="radio" id="get" name="method" value="get" onClick={this.selectHandler}></input>
                <label htmlFor="get">GET</label>
                <input type="radio" id="post" name="method" value="post" onClick={this.selectHandler}></input>
                <label htmlFor="post">POST</label>
                <input type="radio" id="update" name="method" value="update" onClick={this.selectHandler}></input>
                <label htmlFor="update">UPDATE</label>
                <input type="radio" id="delete" name="method" value="delete" onClick={this.selectHandler}></input>
                <label htmlFor="delete">DELETE</label>
           </form>
           <div id="formResult"><span>{this.state.method}</span><span>{this.state.url}</span></div>

           </>
        )
    }

}

export default Form;