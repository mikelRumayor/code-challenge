import {GraphQLNonNull, GraphQLString} from 'graphql'
import articleType from '../types/Article'
import {addArticleResolver} from './controllers'

const addArticle = {
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
  resolve: addArticleResolver
}

export default addArticle
