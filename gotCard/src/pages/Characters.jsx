import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import "../style/App.css";
import React, { useState, useEffect } from "react";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
        setFilteredCharacters(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section>
      <SearchBar
        characters={characters}
        setFilteredCharacters={setFilteredCharacters}
      />
      <div className="character-list">
        {filteredCharacters &&
          filteredCharacters.map((toto) => <Card character={toto} key={toto.id}/>)}
      </div>
    </section>
  );
}

export default Characters;
