import * as Constants from '../constants/articles'
import request from '../../request'

// ------------------------------------
// Actions
// ------------------------------------
export const getAllArticles = (query) => {
  return dispatch => {
    dispatch(requestArticles(query))
    dispatch(storeArticles())
  }
}

export const getArticleById = (query) => {
  return dispatch => {
    dispatch(requestArticle(query))
    dispatch(storeArticle())

  }
}

function requestArticles (query) {
  return dispatch => {
    request.getAllArticles(query).then(response => {
      dispatch(storeArticles(response.data.articles));
    });
  }
}

function requestArticle (query) {
  return dispatch => {
    request.getArticleById(query).then(response => {
      dispatch(storeArticle(response.data.article));
    });
  }
}

function storeArticles (articles) {
  return {
    type    : Constants.GET_ALL_ARTICLES,
    payload : articles
  }
}

function storeArticle (article) {
  return {
    type    : Constants.GET_ARTICLE_BY_ID,
    payload : article
  }
}
