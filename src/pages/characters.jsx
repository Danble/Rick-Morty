import { useSelector } from "react-redux"

export default function Characters() {
  const data = useSelector(state => state.search);
  const characters = data.characters.map(char => (
    <div key={char.id} className="card char-card mb-3 col-sm-12 col-lg-6 col-xl-4" style={{maxWidth: "540px"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={char.image} className="img-fluid rounded-start" alt={char.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{char.name}</h5>
            <p className="card-text">Species: <small className="text-muted">{char.species}</small></p>
            <p className="card-text">Status: <small className="text-muted">{char.status}</small></p>
            <p className="card-text">Gender: <small className="text-muted">{char.gender}</small></p>
          </div>
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
