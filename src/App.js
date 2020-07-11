import React from 'react';
import './App.scss';
import Results from './Components/Results/results.js'
import Form from './Components/form/form.js'
import Header from './Components/Header/header.js'
import Footer from './Components/Footer/footer.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, headers: {"headers":"not much"}, results: {} };
  }
  updateHandler =  (resultData, headersType) => {
    const results= resultData.results;
    const headers= {"Content-Type": `${headersType}`};
    const count = resultData.count;
    this.setState({ count, headers, results });
    console.log('consoling from app' , results);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main id="main">
          <Form handler={this.updateHandler} />
          <Results count={this.state.count} headers={this.state.headers} results={this.state.results} />
        </main>
        <Footer />

      </div>
    )
  }
}

export default App;