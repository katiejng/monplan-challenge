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
      <UnitListItem unitData={unitData} key={unitData.id}/>
    )
  }


  renderUnits(unitlist){

    if (unitlist){
      return(
        <div>
          {unitlist.map(this.renderUnit)}
        </div>
      )
    }
    return
  }

  render(){
    return (
      <ul className="mdc-list my-bordered-list"id="unit_list">
        {this.renderUnits(this.props.units.searched_units)}
      </ul>

    );
  }
}

function mapStateToProps( { units }){
  return { units };
}

export default connect(mapStateToProps)(UnitList)
