import * as Constants from '../constants/articles'
import request from '../../request';

// ------------------------------------
// Actions
// ------------------------------------
export const getAllArticles = (query) => {
  return dispatch => {
    dispatch(requestArticles(query))
    dispatch(storeArticles())

  }
}

function requestArticles (query) {
  return dispatch => {
    request.getAllArticles(query).then(response => {
      dispatch(storeArticles(response.data.articles));
    });
  }
}


function storeArticles (articles) {
  return {
    type    : Constants.GET_ALL_ARTICLES,
    payload : articles
  }
}
