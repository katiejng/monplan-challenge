import axios from 'axios';
const ROOT_URL=`https://monplan-api-dev.appspot.com`
const GET_UNITS_URL = `${ROOT_URL}/basic/units`

export const GET_UNITS='GET_UNITS';

export function getUnits(){
  const request = axios.get(GET_UNITS_URL);
  console.log("The request is "+request);
  return {
    type: GET_UNITS,
    payload: request
  }
}
