import {GraphQLNonNull, GraphQLID} from 'graphql'
import articleType from '../types/Article'
import {removeArticleResolver} from './controllers'

const deleteArticle = {
  type: articleType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: removeArticleResolver
}

export default deleteArticle
