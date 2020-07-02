import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { If, Then } from './Components/IF/index.js';
import Results from './Components/Results/results.js'
import Form from './Components/form/form.js'
import History from './Components/History/history.js';
import Header from './Components/Header/header.js'
import Footer from './Components/Footer/footer.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, headers: { "headers": "not much" }, results: {}, request: {}, history:[] };
  }
  updateHandler = (resultData, headersType) => {
    const results = resultData.results;
    const headers = { "Content-Type": `${headersType}` };
    const count = resultData.count;
    this.setState({ count, headers, results });
    console.log('consoling from app', results);
  }
  historyHandler = (request) =>{
    this.setState(request);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main id="main">
          <Route exact path="/">
            <Form handler={this.updateHandler} history={this.historyHandler}/>
            <If condition={this.state.count}>
              <Then>
                <Results count={this.state.count} headers={this.state.headers} results={this.state.results} />
              </Then>
            </If>
          </Route>
          <Route exact path="/history">
            <History reqInfo={this.state.request} />
          </Route>
        </main>
        <Footer />

      </div>
    )
  }
}

export default App;