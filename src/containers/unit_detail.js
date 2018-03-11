import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Card, CardHeader, CardText, CardTitle} from "material-ui";

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
          <h3 className='mdc-card__title mdc-card__title'>Select a unit to see more information</h3>
        </section>
      </div>
      )
    }
    const currentUnit = this.props.unit.data
    const {unit: { data: {unitCode, unitName, preqs, proh,  faculty , creditPoints }}} = this.props
    console.log(currentUnit)
    return (
      <Card style={{
        textAlign: 'left',
          flex: 1,
      }}
      >
          <CardTitle
            title ={unitCode}
            subtitle={unitName}
            />

          <CardText>
            <div>Faculty: </div>
            {faculty}
          </CardText>

          <CardText>
            <div>Prerequisites: </div>
            {this.renderStringOrNone(currentUnit.preqs)} <br />
            <div>Prohibitions: </div>
            {this.renderStringOrNone(currentUnit.proh)}
          </CardText>


          <CardText>
            <div>Credit Points: </div>
            {currentUnit.creditPoints}
          </CardText>


      </Card>
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
