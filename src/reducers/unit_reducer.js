import { GET_UNITS, SEARCH_UNITS } from '../actions/index'

export default function(state={units: [], searched_units: []}, action){
  switch (action.type){
    case GET_UNITS:
      console.log("The payload is "+ action.payload)
      return {units: action.payload, searched_units: state.searched_units};
    case SEARCH_UNITS:
      console.log(1)
      if (state.units && state.units.data){
        const term = action.payload
         var results = []
         for(var i=0; i<state.units.data.length; i++) {
             if(state.units.data[i].unitCode.toLowerCase().indexOf(term)!==-1) {
               results.push(state.units.data[i].unitCode);
             }
         }
         console.log("results: "+results)
         return {units: state.units, searched_units: results};
      }

    default:
      return state
  }
}
