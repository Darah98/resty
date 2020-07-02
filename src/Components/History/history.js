import React from 'react';

class History extends React.Component{
  constructor(props){
    super(props);
    this.state= {};
  }
  render(){
      return(
        <>
        <ul>
            <li>
                <span>{this.props.reqInfo.method}</span><span>{this.props.reqInfo.url}</span>
            </li>
        </ul>
        </>
      )
  }
}

export default History;