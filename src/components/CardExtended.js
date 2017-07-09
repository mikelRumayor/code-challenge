import React from 'react'
import { Link } from 'react-router-dom'
import request from '../request';
import {ARTICLE_QUERY} from '../queries';


class CardExtended extends React.Component {

  constructor (props) {
    super(props)
    this.state = {article: {}}
  }

  componentDidMount () {
    request.getArticleById({query: ARTICLE_QUERY, variables: {id: this.props.match.params.id}}).then(response => {
      this.setState({ article: response.data.article });
    });
  }

  render () {
    console.log(this.state.article)
    console.log(this.state.article)

    return (
      <div>
        <Link to={'/'}>
          Go back
        </Link>
        <h1>{this.state.article.title}</h1>
        <h2>{this.state.article.author}</h2>
        <span>{this.state.article.published ? 'published': 'not published'}</span>
        <p>{this.state.article.content}</p>
        <ul>
        {this.state.article.tags && this.state.article.tags.map((tag, i) => <li key={i} >{tag}</li>)}
        </ul>
      </div>
    )
  }
}

export default CardExtended
