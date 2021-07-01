import { CHARACTERS_ERROR, CHARACTERS_DEFAULT, CHARACTERS_REQUEST, CHARACTERS_SUCCESS } from "../actions/searchAction";

const initialState = {
  loading: false,
  characters: [],
  error: null
}

const search = (state=initialState, action) => {
  switch(action.type){
    case CHARACTERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case CHARACTERS_DEFAULT:
      return  {
        loading: false,
        characters: [],
        error: null
      }
    case CHARACTERS_SUCCESS:
      return {
        loading: false,
        characters: action.payload,
        error: null
      }
    case CHARACTERS_ERROR:
      return {
        loading: false,
        characters: [],
        error: action.payload
      }
    default: return state;
  }
}

export default search;