import * as Constants from '../constants/articles'


function Articles(state = {
  articles: []
}, action) {
  switch (action.type) {
    case Constants.GET_ALL_ARTICLES:
      return { ...state, articles: action.payload }

    default:
      return state;
  }
}

export default Articles
