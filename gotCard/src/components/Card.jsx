import { useEffect, useState } from "react";
import "../style/card.css";

function Card({}) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="containCard">
      <article className="character-list">
        {characters.map((character) => (
          <section key={character.id} className="character-card">
            <img src={character.imageUrl} alt={character.fullName} className="characterImg" />
            <h2>{character.fulName}</h2>
            <p>{character.title}</p>
            <p> {character.family} </p>
          </section>
        ))}
      </article>
    </section>
  );
}

export default Card;
