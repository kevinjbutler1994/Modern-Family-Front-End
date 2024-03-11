import { useState, useEffect } from 'react';
import { getCharacter, deleteCharacter } from "../services/characters.js";
import { Link, useParams, useNavigate } from "react-router-dom";

function CharacterDetail() {
  const [character, setCharacter] = useState({})

  let { id } = useParams()
  let navigate = useNavigate()

  const fetchCharacter = async () => {
    const oneCharacter = await getCharacter(id)
    setCharacter(oneCharacter)
  }

  useEffect(() => {
    fetchCharacter()
  }, [])

  const handleDelete = async () => {
    await deleteCharacter(id)
    navigate("/characters")
  }

  return (
    <div>
      <h1>Hello, I'm {character.fullName}</h1> 
      <h2>also known as {character.aliases}</h2>
      <img src={character.picture} alt={character.fullName} />
      <p>{character.occupation}</p>
      <p>{character.gender}</p>
      <p>{character.family}</p>
      <div>
        <Link to={`/characters/${id}/edit`}>
          <button>EDIT</button>
        </Link>
        <button onClick={handleDelete}>Delete Character</button>
      </div>
    </div>
  )
}

export default CharacterDetail