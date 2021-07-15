import { useDispatch, useSelector } from "react-redux"
import fetchUniqueChar from "../store/actions/getCharAction";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function Characters() {
  const data = useSelector(state => state.search);
  const character = useSelector(state => state.getChar);
  const dispatch = useDispatch();
  const history = useHistory();
  const [element, setElement] = useState(null);
  const characters = data.characters.map(char => (
    <div
      onClick={e => {
        setElement(e.target.closest('.char-card').id);
        dispatch(fetchUniqueChar(char.id, history))
      }}
      key={char.id}
      id={char.id}
      className="card char-card mb-3 col-sm-12 col-lg-6 col-xl-4" 
      style={{maxWidth: "540px"}}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={char.image} className="img-fluid rounded-start" alt={char.name} />
        </div>
        <div className="col-md-8">
          {character.loading && (element === document.getElementById(char.id).id) ? 'Loading...' :
          <div className="card-body">
            <h5 className="card-title">{char.name}</h5>
            <p className="card-text">Species: <small className="text-muted">{char.species}</small></p>
            <p className="card-text">Status: <small className="text-muted">{char.status}</small></p>
            <p className="card-text">Gender: <small className="text-muted">{char.gender}</small></p>
          </div>}
        </div>
      </div>
    </div>
  ))
  return (
    <div className="container characters row">
      {characters}
    </div>
  )
}
