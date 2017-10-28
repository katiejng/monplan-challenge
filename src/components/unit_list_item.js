import React from 'react';

const UnitListItem = (props) => {
  return (
    <li className="mdc-list-item" id="unit_list_item" key={props.unitData.id}>
      <span className="mdc-list-item__text">
        {props.unitData.unitCode}
        <span className="mdc-list-item__text__secondary">
          {props.unitData.unitName}
        </span>
      </span>
    </li>
  );
}

export default UnitListItem;
