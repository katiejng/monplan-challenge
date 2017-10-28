import React from 'react';
//TODO: Ensure list isn't too long. Allow for scrolling??
const UnitListItem = (props) => {
  return (
    <li className="mdc-list-item" id="unit_list_item">
      <span className="mdc-list-item__text">
        {props.unitCode}
        <span className="mdc-list-item__text__secondary">
          {props.unitName}
        </span>
      </span>
    </li>
  );
}

export default UnitListItem;
