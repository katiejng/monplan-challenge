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
      <UnitListItem
      unitCode={unitData.unitCode}
      unitName={unitData.unitName}
      key={unitData.id}/>
    )
  }


  renderUnits(unitlist){

    if (unitlist.length){
      if (unitlist[0]==-1){
        return (
          <div>
          <UnitListItem
            unitCode="Please search for a unit code."
            unitName="For example, FIT1040"
            key="initialised"/>
          </div>
        )

      }
      return(
        <div>
          {unitlist.map(this.renderUnit)}
        </div>
      )
    }
    return (
      <div>
      <UnitListItem
        unitCode="Sorry. I could not find anything that matched your query."
        unitName="Please try again."
        key="no_results"/>
      </div>
    )
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
