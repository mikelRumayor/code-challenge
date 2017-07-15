import * as Constants from '../constants/articles'

function Articles(state = {
  articles: [],
  article: null
}, action) {
  switch (action.type) {
    case Constants.GET_ALL_ARTICLES:
      return { ...state, articles: action.payload }
    case Constants.GET_ARTICLE_BY_ID:
      return { ...state, article: action.payload }
    default:
      return state
  }
}

export default Articles
