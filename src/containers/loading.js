import React, { Component } from 'react';
import { connect } from 'react-redux'

class Loading extends Component {
  render(){
    if (this.props.units.isLoading==null || this.props.units.isLoading){
      return(
        <div id="loading">
          Loading units...
          Please wait :)
        </div>
      )
    }
    return null
  }
}

function mapStateToProps( { units }){
  return { units };
}

export default connect(mapStateToProps)(Loading)
