import React from 'react';


const UnitDetail = function(){

  return (
    <div className="mdc-card" id="unit_detail">
      <section className="mdc-card__primary">
        <h1 className="mdc-card__title mdc-card__title--large">FIT3080</h1>
        <h2 className="mdc-card__subtitle">Unit Name</h2>
      </section>
      <section className="mdc-card__supporting-text">
        This is unit is terrible and you should study hard
      </section>
      <section className="mdc-card__actions">
        <button className="mdc-button mdc-button--compact mdc-card__action">See more...</button>
        </section>
    </div>
  );
};

export default UnitDetail;
