import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchUnits } from '../actions/index';

class SearchBar extends Component{
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
    return (


      <form onSubmit={this.onFormSubmit} className="input-field">

        <div className="mdc-textfield" id="search_bar">
          <input
          placeholder="Search for a unit code or unit name"
          type="text"
          id="my-textfield"
          className="mdc-textfield__input"
          value={this.state.term}
          onChange={this.onInputChange} />
          <div className="mdc-textfield__bottom-line"></div>
        </div>


        <button type="submit" className="mdc-button mdc-button--raised mdc-button--compact">
          <i className="material-icons mdc-button__icon">search</i>
          Search
        </button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ searchUnits }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
