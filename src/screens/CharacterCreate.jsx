import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createCharacter } from '../services/characters.js'

function CharacterCreate() {
  const [character, setCharacter] = useState({
    name: "",
    aka: "",
    bio: "",
    age: 0,
    gender: "",
    species: "",
    likesCuddles: true,
    image: ""
  })
  
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await createCharacter(character)
    navigate('/characters')
}
  
const handleChange = (e) => {
    const {name, value} = e.target

    setCharacter((prevCharacter) => ({
        prevCharacter, 
        [name]: value
    }))
}

const handleCheckboxChange = (e) => {
    const {name, checked} = e.target
    setCharacter((prevCharacter) => ({
        prevCharacter, 
        [name]: checked
    }))

}
  return (
    <div>
      <h1>Add a new character to the Database!</h1>
      <form> {handleSubmit}
        <input
          type="text"
          placeholder="Please add the character's name"
          name="name"
          value={character.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Nickname"
          name="aka"
          value={character.aka}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={character.age}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Gender"
          name="gender"
          value={character.gender}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Character's bio"
          name="bio"
          value={character.bio}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Add image url"
          name="image"
          value={character.image}
          onChange={handleChange}
        />
        <button type="submit">Add new Character!</button>
      </form>
    </div>
  )
}

export default CharacterCreate