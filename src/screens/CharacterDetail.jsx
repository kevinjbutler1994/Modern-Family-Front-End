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
      <p>Job: {character.occupation}</p>
      <p>Gender: {character.gender}</p>
      <p>Family Members:{character.family}</p>
      <p> Date of Birth: {character.dateOfBirth}</p>
      <p>Played by: {character.actor}</p>
      <div>
        <Link to={`/characters/${id}/edit`}>
          <button>Edit Character</button>
        </Link>
        <button onClick={handleDelete}>Delete Character</button>
      </div>
    </div>
  )
}

export default CharacterDetail