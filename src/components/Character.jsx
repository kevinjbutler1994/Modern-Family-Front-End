import { Link } from 'react-router-dom'

function Character ({character}) {
  return (
    <div>
      <Link to={`/characters/${character._id}`}>
        <img src={character.picture} alt={character.fullName} />
      </Link>
    </div>
  )
}

export default Character