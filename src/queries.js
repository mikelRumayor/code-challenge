export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;


export const ARTICLE_QUERY = `
query article($id: ID!){
  article(id: $id) {
    author
    excerpt
    id
    content
    published
    tags
    title
  }
}`;
