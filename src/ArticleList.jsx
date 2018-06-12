import React from 'react';
import { Link } from "react-router-dom"

export default class ArticleList extends React.Component {
  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/posts/`).then(response => {
      response.json().then(data => {
        this.setState({
          articles: data
        })
      })
    })
  }

  state = {
    articles: []
  }

  render() {
    return (
      <div>
        <h2>Matérias</h2>
        <ul className="article_list">
          {
            this.state.articles.map((article,i) => {
              return (
                <li id={article.id}>
                  <Link to={`/article/${article.id}`}>
                    {article.title}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
