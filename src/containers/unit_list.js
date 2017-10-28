import React, { Component } from 'react';
import { connect } from 'react-redux'

import UnitListItem from '../components/unit_list_item'
class UnitList extends Component {
  constructor(props){
    super(props)
    this.renderUnits.bind(this)
    this.renderUnit.bind(this)
  }

  renderUnit(unitData){
    return(
      <UnitListItem unitData={unitData} />
    )
  }


  renderUnits(unitlist){
    var maxLen=5
    if (unitlist.data){
      maxLen = (unitlist.data.length < maxLen) ? unitlist.data.length : maxLen;
      return(
        <div>
          {unitlist.data.splice(0,maxLen).map(this.renderUnit)}
        </div>
      )
    }
    return
  }

  render(){
    return (
      <ul className="mdc-list my-bordered-list"id="unit_list">
        {this.renderUnits(this.props.units)}
      </ul>

    );
  }
}

function mapStateToProps( { units }){
  return { units };
}

export default connect(mapStateToProps)(UnitList)
