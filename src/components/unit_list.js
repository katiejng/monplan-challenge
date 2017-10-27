import React from 'react';
import UnitListItem from './unit_list_item'
const UnitList = function(props) {

  return (

    <ul className="mdc-list my-bordered-list">
      <li>
        <UnitListItem />
      </li>
  </ul>

  );
}

export default UnitList;
