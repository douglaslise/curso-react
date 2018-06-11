import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class SingleComment extends Component {
  render(){
    return (
        <div className="comment">
          <p className="comment_user">Lorem, ipsum dolor 1.</p>
          <div className="comment_body">Lorem ipsum dolor sit amet.</div>
        </div>
        )
  }
}
