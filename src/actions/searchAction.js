import axios from 'axios';
//import { push } from 'react-router-dom'

export const CHARACTERS_REQUEST = "CHARACTERS_REQUEST";
export const CHARACTERS_DEFAULT = "CHARACTERS_DEFAULT";
export const CHARACTERS_SUCCESS = "CHARACTERS_SUCCESS";
export const CHARACTERS_ERROR = "CHARACTERS_ERROR";

// Actions
export const charactersRequest = () => {
  return {
    type: CHARACTERS_REQUEST
  }
}
export const charactersDefault = () => {
  return {
    type: CHARACTERS_DEFAULT
  }
}
export const charactersSuccess = characters => {
  return {
    type: CHARACTERS_SUCCESS,
    payload: characters
  }
}
export const charactersError = error => {
  return {
    type: CHARACTERS_ERROR,
    payload: error
  }
}

const fetchCharacters = (character, history) => {
  return dispatch => {
    if(!character) {
      dispatch(charactersDefault());
    } else {
      dispatch(charactersRequest());
      axios.get(`https://rickandmortyapi.com/api/character/?name=${character}`)
      .then(res => {
        dispatch(charactersSuccess(res.data.results));
        //Redirecting to characters
        history.push('/Rick-Morty/characters')
      })
      // Aquí podemos manejar más errores: falló de conexión p.e.
      .catch(err => {
        if(err.response) {
          if(err.response.status === 404) {
            dispatch(charactersError("No hay personajes con ese nombre"))
          }
        } else {
          dispatch(charactersError("Problema de conexión"))
        }
      })
    }
  }
}

export default fetchCharacters;