import React from 'react'
import PropTypes from 'prop-types'

const UnitListItem = (props) => {
  return (
    <li className='mdc-list-item' id='unit_list_item'>
      <span className='mdc-list-item__text'>
        {props.unitCode}
        <span className='mdc-list-item__text__secondary'>
          {props.unitName}
        </span>
      </span>
    </li>
  )
}

UnitListItem.propTypes = {
  unitCode: PropTypes.string,
  unitName: PropTypes.string,
}

export default UnitListItem
