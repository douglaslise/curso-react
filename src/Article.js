import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Article extends Component {
  render(){
    return (
      <React.Fragment>
        <header className="header">
          <h1 className="title">Lorem, ipsum dolor.</h1>
        </header>
        <article className="body">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Omnis tempora animi laudantium! Molestias.</p>
          <p>Aut quasi aliquam incidunt facere!</p>
        </article>
      </React.Fragment>)
  }
}
