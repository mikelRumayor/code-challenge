import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../redux/actions/articles'

import CardExtended from '../components/CardExtended'

const mapStateToProps = (state) => {
  const {articles, article} = state.articles
  return {
    articles,
    article
  }
}

export default connect(mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch)
  })
)(CardExtended)
