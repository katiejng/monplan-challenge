import React, { Component } from 'react';
import { connect } from 'react-redux'

import UnitListItem from '../components/unit_list_item'
class UnitList extends Component {

  render(){
    return (
      <ul className="mdc-list my-bordered-list"id="unit_list">
        <UnitListItem />
        <li>
          Test
          {console.log(this.props.units)}
        </li>
      </ul>

    );
  }
}

function mapStateToProps( { units }){
  return { units };
}

export default connect(mapStateToProps)(UnitList)
