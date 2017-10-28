import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUnits, searchUnits } from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = { term: '' };
    this.onInputChange=this.onInputChange.bind(this);
    this.onFormSubmit=this.onFormSubmit.bind(this);
  }

  componentDidMount(){
    this.props.getUnits()
    console.log(this.props);
  }

  onInputChange(event) {
    this.setState({term:event.target.value});
  }

  onFormSubmit(event){
    // prevent page from refreshing
    event.preventDefault();
    console.log(this.state.term);
    //search for the unit in units
    this.props.searchUnits(this.state.term);
    this.setState({term: this.state.term})
  }

  render(){
    return (


      <form onSubmit={this.onFormSubmit} className="input-field">

        <div className="mdc-textfield" id="search_bar">
          <input
          type="text"
          id="my-textfield"
          className="mdc-textfield__input"
          value={this.state.term}
          onChange={this.onInputChange}/>
          <label className="mdc-textfield__label" htmlFor="my-textfield">Search a Unit</label>
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
  return bindActionCreators({ getUnits, searchUnits }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
