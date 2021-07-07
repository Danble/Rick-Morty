import { CHARACTER_ERROR, CHARACTER_REQUEST, CHARACTER_SUCCESS } from "../actions/getCharAction";

const initialState = {
  loading: false,
  character: {},
  error: null
}

const character = (state=initialState, action) => {
  switch(action.type){
    case CHARACTER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case CHARACTER_ERROR:
      return {
        loading: false,
        character: {},
        error: action.payload
      }
    case CHARACTER_SUCCESS:
      return {
        loading: false,
        character: action.payload,
        error: null
      }
    default: return state
  }
}

export default character;