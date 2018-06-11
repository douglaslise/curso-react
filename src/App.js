import React, { Component } from 'react';
import logo from './logo.svg';
import Article from './Article';
import Comments from './Comments';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article />

        <h2>Comentários</h2>
        <Comments />
      </div>
    );
  }
}

export default App;
