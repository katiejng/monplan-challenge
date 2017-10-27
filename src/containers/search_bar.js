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

        <div class="mdc-textfield" id="my_search_bar">
          <input type="text" id="my-textfield" class="mdc-textfield__input" />
          <label class="mdc-textfield__label" for="my-textfield">Search a Unit</label>
          <div class="mdc-textfield__bottom-line"></div>
        </div>


        <button type="submit" className="mdc-button mdc-button--raised mdc-button--compact">
          <i class="material-icons mdc-button__icon">search</i>
          Search
        </button>
      </form>
    )
  }
}

export default SearchBar;
