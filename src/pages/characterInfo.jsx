import { useSelector } from 'react-redux'

function Photo({image, title}) {
  return (
    <div>
      <img src={image} alt={title} />
    </div>
  );
}

export default function Character() {
  const data = useSelector(state => state.getChar);
  return (
    <div>
      <Photo image={data.character.image} title={data.character.name} />
    </div>
  );
}