import {UNIT_SELECTED} from '../actions/index'

export default function(state=null, action){
    console.log(action.type)
    switch(action.type){
        case UNIT_SELECTED:
          return action.payload
        default:
          return state
      }
}
