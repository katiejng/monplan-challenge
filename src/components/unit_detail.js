import React from 'react';


const UnitDetail = function(){

  return (
    <div class="mdc-card" id="unit_detail">
      <section class="mdc-card__primary">
        <h1 class="mdc-card__title mdc-card__title--large">FIT3080</h1>
        <h2 class="mdc-card__subtitle">Unit Name</h2>
      </section>
      <section class="mdc-card__supporting-text">
        This is unit is terrible and you should study hard
      </section>
      <section class="mdc-card__actions">
        <button class="mdc-button mdc-button--compact mdc-card__action">See more...</button>
        </section>
    </div>
  );
};

export default UnitDetail;
