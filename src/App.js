import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './Article';
import Comments from './Comments';
import ArticleList from './ArticleList';
import { BrowserRouter, Route } from "react-router-dom"

const ArticlePage = (props) => {
  return (
    <div className="App">
      <Article id={props.match.params.id} />
      <Comments />
    </div>
  )
}

// Function as Component - return is the render
const HomePage = props => {
  return (
    <div>
      <h1>Home</h1>
      <ArticleList />
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/article/:id" component={ArticlePage} />
          <Route path="/" exact component={HomePage} />
        </div>
      </BrowserRouter>
      );
  }
}

export default App;
