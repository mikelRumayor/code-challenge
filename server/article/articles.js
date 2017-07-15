import {GraphQLList} from 'graphql'
import articleType from '../types/Article'
import {articlesResolver} from './controllers'

const articles = {
  type: new GraphQLList(articleType),
  resolve: articlesResolver
}

export default articles
