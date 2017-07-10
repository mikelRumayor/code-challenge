import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import db from './db';

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => ({
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    excerpt: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLString,
    },
    published: {
      type: GraphQLBoolean,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: GraphQLString,
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve() {
        return db.Article.find();
      },
    },
    article: {
      type: articleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(_, {id}) {
        return db.Article.findById(id);
      },
    },
  }),
});

const Mutation  = new GraphQLObjectType({
  name: 'Mutations',
  fields: () => ({
    addArticle: {
      type: articleType,
      args: {
        title: {
              type: new GraphQLNonNull(GraphQLString),
         },
         description: {
           type: GraphQLString,
         },
         author: {
           type: new GraphQLNonNull(GraphQLString),
         }
      },
      resolve: async (parent, args) => {
           const article = await db.Article.create({
             title: args.title,
             description: args.description,
             author: args.author
           });
           return article;
         },
       },
       deleteArticle: {
         type: articleType,
         args: {
           id: {
             type: new GraphQLNonNull(GraphQLID)
           }
         },
         resolve(_, {id}) {
           return db.Article.remove(id);
         },
       },
       updateArticle: {
         type: articleType,
         args: {
           title: {
                 type: new GraphQLNonNull(GraphQLString),
            },
            description: {
              type: GraphQLString,
            },
            author: {
              type: new GraphQLNonNull(GraphQLString),
            }
         },
         resolve: async (parent, args) => {
              const article = await db.Article.findOneAndUpdate({
                title: args.title,
                description: args.description,
                author: args.author
              });
              return article;
            },
       }
   }),
});


const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default Schema;
