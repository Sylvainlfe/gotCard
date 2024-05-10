import { useState } from "react";
import "../style/searchBar.css";

function SearchBar({ characters, setFilteredCharacters }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const searchedCharacters = characters.filter((character) => {
      return (
        character.fullName.toLowerCase().includes(value) ||
        character.title.toLowerCase().includes(value) ||
        character.family.toLowerCase().includes(value) ||
        character.firstName.toLowerCase().includes(value) ||
        character.lastName.toLowerCase().includes(value)
      );
    });

    setFilteredCharacters(searchedCharacters);
  };

  return (
    <section className="containSearch">
      <section className="containSearchBar">
        <input
          type="text"
          className="searchBar"
          id="searchBar"
          placeholder="Rechercher"
          onChange={handleSearch}
        />
      </section>
    </section>
  );
}

export default SearchBar;