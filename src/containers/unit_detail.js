import React, {Component} from 'react';
import { connect } from 'react-redux'

//TODO: Location and Times
class  UnitDetail extends Component{

  renderLocationAndTime(lat){
    var time = <div />
    if (lat.time){
      time = lat.time.map((time)=>
        <div key={time}>
          {time}
        </div>
      )}

    return(
            <div key={lat.location}>
              {lat.location}
              {time}
            </div>
          )
        }


  render(){
    if (!this.props.unit){
        return (<div className="mdc-card" id="unit_detail">
          <section className="mdc-card__primary">
            <h1 className="mdc-card__title mdc-card__title--large">Select a unit to get started</h1>
          </section>
        </div>
      )
    }
      console.log(this.props.unit.data)
      const currentUnit = this.props.unit.data
    return (
      <div className="mdc-card" id="unit_detail">
        <section className="mdc-card__primary">
          <h1 className="mdc-card__title mdc-card__title--large">{currentUnit.unitCode}</h1>
          <h2 className="mdc-card__subtitle">{currentUnit.unitName}</h2>

        </section>
        <div id="unit_detail_body">

          <section className="mdc-card__supporting-text">
            <h3 className="mdc-card__subtitle">{currentUnit.description}</h3>
          </section>

          <section className="mdc-card__supporting-text">
            Faculty: <br />
            {currentUnit.faculty}
          </section>

          <section className="mdc-card__supporting-text">
            Prerequisites: <br />
            {currentUnit.preqs} <br />
            Prohibitions: <br />
            {currentUnit.proh}
          </section>

          <section className="mdc-card__supporting-text">
          Offered at: <br />
            {currentUnit.locationAndTime.map(this.renderLocationAndTime)
            }
          </section>
          <section className="mdc-card__supporting-text">
            Credit Points: {currentUnit.creditPoints}
          </section>
          <section className="mdc-card__actions">
            <button className="mdc-button mdc-button--compact mdc-card__action">See more...</button>
            </section>
          </div>
      </div>
    );
  };
}

function mapStateToProps(state){
  return {
    unit: state.activeUnit
  }
}

export default connect(mapStateToProps)(UnitDetail);
