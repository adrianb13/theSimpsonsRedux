import * as types from "../actions/types";

const initialState = {
  simpsons: [],
  episode: [],
  seasons: []
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case types.LOAD_SIMPSONS_SUCCESS:
      return Object.assign({}, state, {
        simpsons: state.simpsons.concat(action.family)
      });
    case types.GET_EPISODE_SUCCESS: 
      return Object.assign({}, state, {
        episode: [action.episode]
      });
    case types.GET_MISSING_SUCCESS:
      return Object.assign({}, state, {
        episode: [action.episode1]
      });
    case types.GET_SEASON_SUCCESS: 
      return Object.assign({}, state, {
        seasons: state.seasons.concat(action.seasons)
      });
    default: 
      return state;
  }
};

export default rootReducer;