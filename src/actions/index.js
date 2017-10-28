import axios from 'axios';
const ROOT_URL=`https://monplan-api-dev.appspot.com`
const GET_UNITS_URL = `${ROOT_URL}/basic/units`

export const GET_UNITS='GET_UNITS';
export const SEARCH_UNITS='SEARCH_UNITS'
export const UNIT_SELECTED='UNIT_SELECTED'

export function selectUnit(unit){
  return {
    type: UNIT_SELECTED,
    payload: unit
  }
}

export function searchUnits(term){
  return {
    type: SEARCH_UNITS,
    payload: term
  }
}

export function getUnits(){
  const request = axios.get(GET_UNITS_URL);

  return {
    type: GET_UNITS,
    payload: request
  }
}
