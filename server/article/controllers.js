import db from '../db'

const articleResolver = (_, args) => {
  return db.Article.findById(args.id)
}

const articlesResolver = () => {
  return db.Article.find()
}

const addArticleResolver = async (parent, args) => {
  const article = await db.Article.create({
    title: args.title,
    description: args.description,
    author: args.author
  })
  return article
}

const removeArticleResolver = async (parent, args) => {
  return db.Article.remove(args.id)
}

const updateArticleResolver = async (parent, args) => {
  const article = await db.Article.findOneAndUpdate({
    title: args.title,
    description: args.description,
    author: args.author
  })
  return article
}

export default {
  articleResolver,
  articlesResolver,
  addArticleResolver,
  removeArticleResolver,
  updateArticleResolver
}
