import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// TODO: Location and Times
class UnitDetail extends Component {
  renderLocationAndTime (lat) {
    var time = <div />
    if (lat.time) {
      time = lat.time.map((time) =>
        <div key={time}>
          {time}
        </div>
      )
    }

    return (
      <div key={lat.location}>
        <div id='location_header'>{lat.location}</div>
        {time}
      </div>
    )
  }

  renderStringOrNone (string) {
    if (string) {
      return <div>{string}</div>
    }
    return <div>None</div>
  }

  render () {
    if (!this.props.unit) {
      return (<div className='mdc-card' id='unit_detail'>
        <section className='mdc-card__primary'>
          <h1 className='mdc-card__title mdc-card__title'>Select a unit to see more information</h1>
        </section>
      </div>
      )
    }
    const currentUnit = this.props.unit.data
    return (
      <div className='mdc-card' id='unit_detail'>
        <section className='mdc-card__primary'>
          <h1 className='mdc-card__title mdc-card__title--large'>{currentUnit.unitCode}</h1>
          <h2 className='mdc-card__subtitle'>{currentUnit.unitName}</h2>

        </section>
        <div id='unit_detail_body'>

          <section className='mdc-card__supporting-text'>
            <h3 className='mdc-card__subtitle'>{currentUnit.description}</h3>
          </section>

          <section className='mdc-card__supporting-text'>
            <div id='unit_detail_header'>Faculty: </div>
            {currentUnit.faculty}
          </section>

          <section className='mdc-card__supporting-text'>
            <div id='unit_detail_header'>Prerequisites: </div>
            {this.renderStringOrNone(currentUnit.preqs)} <br />
            <div id='unit_detail_header'>Prohibitions: </div>
            {this.renderStringOrNone(currentUnit.proh)}
          </section>

          <section className='mdc-card__supporting-text'>
            <div id='unit_detail_header'>Offered at: </div>
            {currentUnit.locationAndTime.map(this.renderLocationAndTime)
            }
          </section>
          <section className='mdc-card__supporting-text'>
            <div id='unit_detail_header'>Credit Points: </div>
            {currentUnit.creditPoints}
          </section>

        </div>
      </div>
    )
  };
}


UnitDetail.propTypes = {
  unit: PropTypes.object
}

function mapStateToProps (state) {
  return {
    unit: state.activeUnit
  }
}

export default connect(mapStateToProps)(UnitDetail)
