import {GraphQLNonNull, GraphQLID} from 'graphql'
import articleType from '../types/Article'
import {articleResolver} from './controllers'

const article = {
  type: articleType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: articleResolver
}

export default article
