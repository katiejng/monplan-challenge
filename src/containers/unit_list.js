import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectUnit } from '../actions/index'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import UnitListItem from '../components/unit_list_item'

class UnitList extends Component {
  constructor (props) {
    super(props)
    this.renderUnits.bind(this)
  }
  renderUnits (unitlist) {
    if (unitlist.length) {
      if (unitlist[0] === -1) {
        return (
          <div>
            <UnitListItem
              unitCode='Please search for a unit code above.'
              unitName='For example, FIT1040'
              key='initialised' />
          </div>
        )
      }
      return (
        <div
          style={{
            flex: 1,
          }}
        >
          {unitlist.map(

            unitData => {
              return (
                <li
                  key={unitData.id}
                  className='mdc-list-item'
                  id='unit_list_item' onClick={() => this.props.selectUnit(unitData)}>
                  <span className='mdc-list-item__text'>
                    {unitData.unitCode}&nbsp;
                    <span className='mdc-list-item__text__secondary'>
                      {unitData.unitName}
                    </span>
                  </span>
                </li>
              )
            }

          )}
        </div>
      )
    }
    return (
      <div>
        <UnitListItem
          unitCode='Sorry. Could not find anything that matched your query.'
          unitName='Please try again.'
          key='no_results' />
      </div>
    )
  }

  render () {
    return (
      <ul className='mdc-list my-bordered-list' id='unit_list'>
        {this.renderUnits(this.props.units.searched_units)}
      </ul>

    )
  }
}

UnitList.propTypes = {
  units: PropTypes.object,
  selectUnit: PropTypes.func
}

function mapStateToProps ({ units }) {
  return { units }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({selectUnit: selectUnit}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitList)
