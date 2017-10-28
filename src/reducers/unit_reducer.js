import { GET_UNITS } from '../actions/index'

export default function(state=[], action){
  switch (action.type){
    case GET_UNITS:
      console.log("The payload is "+ action.payload)
      return action.payload;
  }
  return state
}
