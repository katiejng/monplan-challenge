import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchUnits , getUnits } from '../actions/index';
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import CircularProgress from 'material-ui/CircularProgress';


class SearchBar extends Component{
  componentDidMount () {
    this.props.getUnits()
  }

  constructor(props){
    super(props);
    this.state = { term: '' };
    this.onInputChange=this.onInputChange.bind(this);
    this.onFormSubmit=this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    //TODO: Animate the input box
    this.setState({term:event.target.value});
  }

  onFormSubmit(event){
    // prevent page from refreshing
    event.preventDefault();
    //search for the unit in units
    if (this.state.term.length>0){
      //TODO: Show an error
      this.props.searchUnits(this.state.term);
    }
  }

  render(){


    if (this.props.units.isLoading){
      return (
        <div>
          <CircularProgress id="loading"/>
        </div>
      )
    }

    return (


      <form onSubmit={this.onFormSubmit} className="input-field">

        <div className="mdc-textfield" id="search_bar">
          <TextField
          floatingLabelText="Search for a unit code or unit name"
          type="text"
          id="my-textfield"
          value={this.state.term}
          onChange={this.onInputChange}
          fullWidth />
        </div>


        <button type="submit" className="mdc-button mdc-button--raised mdc-button--compact" >
          <i className="material-icons mdc-button__icon">search</i>
          Search
        </button>
      </form>
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getUnits, searchUnits }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
