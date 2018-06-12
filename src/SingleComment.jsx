import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class SingleComment extends Component {
  state = {
    open: true,
  }

  handleButtonClick = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render(){
    return (
        <div className="comment">
          {this.state.open && (<React.Fragment>
            <p className="comment_user">{this.props.user}</p>
            <div className="comment_body">{this.props.body}</div>
            </React.Fragment>
          )}
          <button onClick={this.handleButtonClick}>Esconder comentário</button>
        </div>
        )
  }
}
