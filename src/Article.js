import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Article extends Component {
  state = {
    body: "",
    title: "Carregando"
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts/1/").then(response => {
      response.json().then(data => {
        this.setState({
          body: data.body,
          title: data.title
        })
      })
    })
  }
  render(){
    return (
      <React.Fragment>
        <header className="header">
          <h1 className="title">{this.state.title}</h1>
        </header>
        <article className="body">
          {this.state.body}
        </article>
      </React.Fragment>)
  }
}
