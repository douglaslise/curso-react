import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SingleComment from './SingleComment';

export default class Comments extends Component {
  render(){
    return (
      <section className="comments">
        <SingleComment />
        <SingleComment />
      </section>)
  }
}
