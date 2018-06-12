import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewComment from './NewComment';
import SingleComment from './SingleComment';

export default class Comments extends Component {
  state = {
    comments: []
  }

  addComment = comment => {
    this.setState({
      comments: [
        ...this.state.comments, comment
      ]
    })
  }

  render(){
    return (
      <section className="comments">
        <h2>Comentários</h2>
        <NewComment onNewComment={this.addComment} />
        {
          this.state.comments.map((comment, i) => {
            return <SingleComment key={i} user={comment.user} body={comment.body} />
          })
        }
      </section>)
  }
}
