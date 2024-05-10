import "./style/App.css";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import React, { useState, useEffect } from "react";

function App() {
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
      <NavBar />
      <SearchBar
        characters={characters}
        setFilteredCharacters={setFilteredCharacters}
      />
      <Card characters={filteredCharacters} />
    </section>
  );
}

export default App;
