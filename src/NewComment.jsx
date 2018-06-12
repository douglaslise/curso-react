import React, { Component } from 'react';

const initialSstate = {
  name: "",
  body: ""
}

export default class NewComment extends React.Component {

  state = initialSstate

  handleChange = field => {
    return event => {
      this.setState({
        [field]: event.target.value
      })
    }
  }

  handleSubmitClick = event => {
    this.props.onNewComment({
      user: this.state.name,
      body: this.state.body

    this.setState(initialSstate)
  }

  render() {
    return (
        <div className="new_comment">
          <h3>Adicionar novo comentário</h3>
          <label htmlFor="">Nome</label>
          <input type="text" id="name" value={this.state.name} onChange={this.handleChange("name")}/>
          <label htmlFor="body">Comentário</label>
          <textarea name="body" id="body" cols="30" rows="10" className="commentBox" onChange={this.handleChange("body")} value={this.state.body}>
          </textarea>
          <button onClick={this.handleSubmitClick}>Comentar</button>
        </div>
    );
  }
}
