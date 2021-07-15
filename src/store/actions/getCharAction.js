import axios from "axios";
// Sweet alert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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
      dispatch(characterSuccess(res.data));
      history.push(`/Rick-Morty/${id}`)
    })
    .catch(err => {
      console.log(err);
      // Lanzo un mensaje de sweet alert si hay un error (generalmente será de conexión).
      const MySwal = withReactContent(Swal)
      MySwal.fire({
        title: '¡Error!',
        text: 'Ha habido un error inesperado',
        icon: 'error',
        confirmButtonText: '¡Esto apesta!',
        confirmButtonColor: 'rgb(80, 173, 177)' 
      })
      dispatch(characterError("Ha habido un error inesperado"));
    });
  }
}

export default fetchUniqueChar;