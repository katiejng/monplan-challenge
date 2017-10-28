import React, {Component} from 'react';
import { connect } from 'react-redux'

//TODO: Location and Times
class  UnitDetail extends Component{

  render(){

    if (!this.props.unit){
        return (<div className="mdc-card" id="unit_detail">
          <section className="mdc-card__primary">
            <h1 className="mdc-card__title mdc-card__title--large">Select a unit to get started</h1>
          </section>
        </div>
      )
    }
    return (
      <div className="mdc-card" id="unit_detail">
        <section className="mdc-card__primary">
          <h1 className="mdc-card__title mdc-card__title--large">{this.props.unit.unitCode}</h1>
          <h2 className="mdc-card__subtitle">{this.props.unit.unitName}</h2>
        </section>
        <section className="mdc-card__supporting-text">
          {this.props.unit.faculty}
        </section>
        <section className="mdc-card__supporting-text">
        Offered at: 
          {this.props.unit.locationAndTime.map(
            (lat)=>
                <div key={lat.location}>
                  {lat.location}
                  {lat.time.map((time)=>
                    <div key={time}>
                      {time}
                    </div>
                  )}
                </div>
            )
          }
        </section>
        <section className="mdc-card__supporting-text">
          Credit Points: {this.props.unit.creditPoints}
        </section>
        <section className="mdc-card__actions">
          <button className="mdc-button mdc-button--compact mdc-card__action">See more...</button>
          </section>
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
