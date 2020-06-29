import React from 'react';
import './App.scss';
import Form from './Components/form/form.js'
import Header from './Components/Header/header.js'
import Footer from './Components/Footer/footer.js'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Form />
      </main>
      <Footer />

    </div>
  );
}

export default App;