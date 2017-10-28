import React from 'react';
import UnitListItem from './unit_list_item'
const UnitList = function(props) {

  return (
    <ul className="mdc-list my-bordered-list"id="unit_list">
      <UnitListItem />
    </ul>
  );
}

export default UnitList;
