import {GraphQLNonNull, GraphQLString} from 'graphql'
import articleType from '../types/Article'
import {updateArticleResolver} from './controllers'

const updateArticle = {
  type: articleType,
  args: {
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: GraphQLString
    },
    author: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: updateArticleResolver
}

export default updateArticle
