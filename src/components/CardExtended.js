import React from 'react'
import { Link } from 'react-router-dom'
import {ARTICLE_QUERY} from '../queries'

class CardExtended extends React.Component {

  componentDidMount () {
    this.props.actions.getArticleById({query: ARTICLE_QUERY, variables: {id: this.props.match.params.id}})
  }

  render () {
    if (!this.props.article) {
      return null
    }

    return (
      <div>
        <Link to={'/'}>
          Go back
        </Link>
        <h1>{this.props.article.title}</h1>
        <h2>{this.props.article.author}</h2>
        <span>{this.props.article.published ? 'published' : 'not published'}</span>
        <p>{this.props.article.content}</p>
        <ul>
          {this.props.article.tags && this.props.article.tags.map((tag, i) => <li key={i} >{tag}</li>)}
        </ul>
      </div>
    )
  }
}

export default CardExtended
