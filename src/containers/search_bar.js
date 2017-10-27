import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = { term: '' };
    this.onInputChange=this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({term:event.target.value});
  }

  onFormSubmit(event){
    // prevent page from refreshing
    event.preventDefault();
  }

  render(){
    return (


      <form onSubmit={this.onFormSubmit} className="input-field">
        <input
          id="search"
          type="search"
          placeholder="Search a unit"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

export default SearchBar;
