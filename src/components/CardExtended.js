import React from 'react'
import { Link } from 'react-router-dom'
import request from '../request';
import {ARTICLE_QUERY} from '../queries';


class CardExtended extends React.Component {

  constructor (props) {
    super(props)
    this.state = {article: {}}
  }

  componentWillMount () {
    console.log('hola')
    request.getArticleById({query: ARTICLE_QUERY, variables: {id: '59623e7d09e5c32e59a3f707'}}).then(response => {
      this.setState({ article: response.data.article });
    });
  }

  render () {
    return (
      <div>
        <Link to={'/'}>
          Go back
        </Link>
      </div>
    )
  }
}

export default CardExtended
