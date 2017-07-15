import articleType from './types/Article'

import {article, articles, addArticle, deleteArticle, updateArticle} from './article'

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    article,
    articles
  })
})

const Mutation  = new GraphQLObjectType({
  name: 'Mutations',
  fields: () => ({
    addArticle,
    deleteArticle,
    updateArticle
   })
})


const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
})

export default Schema
