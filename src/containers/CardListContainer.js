import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../redux/actions/articles'

import CardList from '../components/CardList'


const mapStateToProps = (state) => {
  const {articles, article} = state.articles
  return {
    articles,
    article
  };
}



export default connect(mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch)
  })
)(CardList);
