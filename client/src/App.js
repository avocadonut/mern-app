import React, { Component } from 'react';
import Header from './layouts/Header';
import Main from './layouts/Main';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

export default App;