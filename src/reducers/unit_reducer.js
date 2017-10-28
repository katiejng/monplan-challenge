import { GET_UNITS, SEARCH_UNITS } from '../actions/index'

export default function(state={units: [], searched_units: [-1], isLoading: true}, action){
  switch (action.type){
    case GET_UNITS:
      return {units: action.payload, searched_units: state.searched_units, isLoading: false};
    case SEARCH_UNITS:
      if (state.units && state.units.data){
        const term = action.payload
         var results = []


         for(var i=0; i<state.units.data.length; i++) {
             if(state.units.data[i].unitCode.toLowerCase().indexOf(term)!==-1) {
               results.push(state.units.data[i]);
             }
         }

         return {units: state.units, searched_units: results, isLoading: state.isLoading};
      }
      return state

    default:
      return state
  }
}
