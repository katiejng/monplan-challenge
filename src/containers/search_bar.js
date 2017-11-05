import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchUnits, getUnits } from '../actions/index'
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress'
import AutoComplete from 'material-ui/AutoComplete'

class SearchBar extends Component {
  componentDidMount () {
    this.props.getUnits()
  }

  constructor (props) {
    super(props)
    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange (searchText, dataSource, params) {
    // TODO: Animate the input box
    this.setState({term: searchText, termError: ''})
  }

  onFormSubmit (event) {
    this.setState({termError: ''})
    // search for the unit in units
    if (this.state.term.length > 0) {
      // TODO: Show an error
      this.props.searchUnits(this.state.term)
    } else {
      this.setState({termError: 'Please enter some text'})
    }
  }

  render () {
    const termError = this.state.termError ? { errorText: 'Please enter some text' } : {}
    if (this.props.units.isLoading) {
      return (
        <div>
          <CircularProgress id='loading' />
        </div>
      )
    }
    const data = this.props.units.units.data.map((unit) => `${unit.unitCode} ${unit.unitName}`)
    return (

      <div id='input_field'>
        <div id='search_bar'>
          <AutoComplete
            floatingLabelText='Search for a unit code or unit name'
            type='text'
            value={this.state.term}
            fullWidth
            onNewRequest={this.onFormSubmit}
            onUpdateInput={this.onInputChange}
            dataSource={data}
            filter={AutoComplete.caseInsensitiveFilter}
            maxSearchResults={5}
            {...termError} />
        </div>

        <button onClick={this.onFormSubmit} type='submit' id='search_button' className='mdc-button mdc-button--raised mdc-button--compact' >
          <i className='material-icons mdc-button__icon'>search</i>
          Search
        </button>

      </div>
    )
  }
}

SearchBar.propTypes = {
  searchUnits: PropTypes.func,
  getUnits: PropTypes.func,
  units: PropTypes.object
}

function mapStateToProps ({ units }) {
  return { units }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ getUnits, searchUnits }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
