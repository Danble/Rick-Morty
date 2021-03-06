import React from 'react';
import { useState, useEffect } from 'react';
import '../assets/styles/polish.css'
import {useDispatch, useSelector} from 'react-redux'
import fetchCharacters from '../store/actions/searchAction';
import {useHistory} from 'react-router-dom'

function getChars(e, dispatcher, chars, history){
  e.preventDefault();
  dispatcher(fetchCharacters(chars, history));
}

export default function Home() {
  const data = useSelector(state => state.search);
  const history = useHistory();
  const dispatch = useDispatch();
  const [char, setChar] = useState(null);
  const [iWidth, setIWidth] = useState(window.innerWidth)
  
  useEffect(() => {
    function reportWindowSize() {
        setIWidth(window.innerWidth);
    }
    window.addEventListener('resize', reportWindowSize);
    //  Cleanup for componentWillUnmount
    return () => window.removeEventListener('resize', reportWindowSize);
  }, /* Honestly I think this is necessary... */ []);

  return (
    <main>
      { !data.error && !data.loading &&
      <form className="d-flex search-bar">
        <input
          className="form-control me-2 round"
          type="search" onChange={e => setChar(e.target.value)}
          placeholder="Rick Sanchez"
          aria-label="Search" />
        <button 
          onClick={e => getChars(e, dispatch, char, history)}
          className="btn btn-outline-success search-btn"
          type="submit">{iWidth > 425 ? 'Buscar personajes' : 'Buscar'}
        </button>
      </form>}
      {data.loading &&
      <div className="sprite">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/97424/sprite-spinner.png" alt="loading" />
      </div>}
      {!data.loading && data.error &&
      <div className="error">
        <p><b>{data.error}</b></p>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => {
            dispatch(fetchCharacters(null, history))
          }}>Regresar</button>
      </div>}     
    </main>
  );
}
