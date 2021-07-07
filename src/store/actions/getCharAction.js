import axios from "axios";

export const CHARACTER_REQUEST = "CHARACTER_REQUEST";
export const CHARACTER_SUCCESS = "CHARACTER_SUCCESS";
export const CHARACTER_ERROR = "CHARACTER_ERROR";

// Actions
export const characterRequest = () => {
  return {
    type: CHARACTER_REQUEST
  }
}
export const characterSuccess = character => {
  return {
    type: CHARACTER_SUCCESS,
    payload: character
  }
}
export const characterError = error => {
  return {
    type: CHARACTER_ERROR,
    payload: error
  }
}

const fetchUniqueChar = (id, history) => {
  return dispatch => {
    dispatch(characterRequest());
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
      console.log(res.data);
      dispatch(characterSuccess(res.data));
      history.push(`/Rick-Morty/${id}`)
    })
    .catch(err => {
      console.log(err);
      dispatch(characterError("Ha habido un error inesperado"));
    });
  }
}

export default fetchUniqueChar;