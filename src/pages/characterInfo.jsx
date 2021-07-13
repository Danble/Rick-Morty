import { useSelector } from 'react-redux'

function Photo({image, title}) {
  return (
    <div className="photo">
      <img src={image} alt={title} />
      <p><b>{title}</b></p>
    </div>
  );
}

function MainData({species, status, type, gender}) {
  return (
    <div className="main-data">
      <p>Species: {species}</p>
      <p>Status: {status}</p>
      <p>Type: {type}</p>
      <p>Gender: {gender}</p>
    </div>
  );
}

export default function Character() {
  const data = useSelector(state => state.getChar);
  const char = data.character;
  return (
    <div className="canvas row">
      <div className="main">
        <Photo image={char.image} title={char.name} />
        <MainData
          species={char.species}
          status={char.status}
          type={char.type}
          gender={char.gender}
        />
      </div>
      <div className="bonus">
        <p>Origin: <b>{char.origin.name}</b></p>
        <p>Location: <b>{char.location.name}</b></p>
        <p>Episodes appearances: {char.episode.length}</p>
      </div>
    </div>
  );
}