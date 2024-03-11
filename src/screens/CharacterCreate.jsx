import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCharacter } from "../services/characters.js";

function CharacterCreate() {
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

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createCharacter(character);
    // navigate('/characters')
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCharacter((prevCharacter) => ({
      prevCharacter,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCharacter((prevCharacter) => ({
      prevCharacter,
      [name]: checked,
    }));
  };
  return (
    <div>
      <h1>Add a new character to the Database!</h1>
      <form>
        {" "}
        {handleSubmit}
        <input
          type="text"
          placeholder="Full Name"
          name="Full Name"
          value={character.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Nickname"
          name="Nickname"
          value={character.aliases}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Gender"
          name="Gender"
          value={character.gender}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Occupation"
          name="Occupation"
          value={character.occupation}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Family"
          name="Family"
          value={character.family}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Date of Birth"
          name="Date of Birth"
          value={character.dateofBirth}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Actor"
          name="Actor"
          value={character.actor}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="image url"
          value={character.picture}
          onChange={handleChange}
        />
        <button type="submit">Add new Character!</button>
      </form>
    </div>
  );
}

export default CharacterCreate;
