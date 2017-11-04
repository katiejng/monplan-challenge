import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { getUnits } from '../actions/index'

class Loading extends Component {
  componentDidMount () {
    this.props.getUnits()
  }

  render () {
    if (this.props.units.isLoading == null || this.props.units.isLoading) {
      return (
        <div id='loading'>
          Loading units...
          Please wait :)
        </div>
      )
    }
    return null
  }
}

function mapStateToProps ({ units }) {
  return { units }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ getUnits }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
