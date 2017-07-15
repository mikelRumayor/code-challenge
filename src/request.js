import axios from 'axios';

function getAllArticles (query) {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:4000/graphql', { query })
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  })
}

function getArticleById (query) {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:4000/graphql', query)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  })
}

export default {
  getAllArticles,
  getArticleById
}
