import React from 'react';

const UnitList = function(props) {

  return (
    <ul className="mdc-list my-bordered-list">
      <li className="mdc-list-item">
        <span className="mdc-list-item__text">
        Two-line item
        <span className="mdc-list-item__text__secondary">Secondary text</span>
        </span>
      </li>

      <li className="mdc-list-item">
        <span className="mdc-list-item__text">
        Two-line item
        <span className="mdc-list-item__text__secondary">Secondary text</span>
        </span>
      </li>

      <li className="mdc-list-item">
        <span className="mdc-list-item__text">
        Two-line item
        <span className="mdc-list-item__text__secondary">Secondary text</span>
        </span>
      </li>
    </ul>

);
}

export default UnitList;
