import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCharacter, editCharacter } from "../services/characters.js";

function CharacterEdit() {
  const [character, setCharacter] = useState({
    fullName: "",
    aliases: "",
    gender: "",
    occupation: "",
    family: "",
    dateofBirth: "",
    actor: "",
    picture: "",
  });

  let { id } = useParams()
  let navigate = useNavigate();

  async function fetchCharacter() {
    const oneCharacter = await getCharacter(id)
    setCharacter(oneCharacter)
  }

  useEffect(() => {
    fetchCharacter()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    await editCharacter(id, character);
    navigate(`/characters/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Update your character! </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={character.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Nickname"
          name="aliases"
          value={character.aliases}
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
          placeholder="Occupation"
          name="occupation"
          value={character.occupation}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Family"
          name="family"
          value={character.family}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Date of Birth"
          name="dateofBirth"
          value={character.dateofBirth}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Actor"
          name="actor"
          value={character.actor}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="picture"
          value={character.picture}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default CharacterEdit;