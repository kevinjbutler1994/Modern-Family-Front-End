import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCharacter, editCharacter } from "../services/characters.js";

function CharacterEdit() {
  const [character, setCharacter] = useState({
    name: "",
    aka: "",
    job: "",
    image: "",
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

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]: checked,
    }));
  };

  return (
    <div>
      <h1>Update your character! </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please add the character's name"
          name="name"
          value={character.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Nickname"
          name="aka"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Profession"
          name="Profession"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Add image url"
          name="image"
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default CharacterEdit;