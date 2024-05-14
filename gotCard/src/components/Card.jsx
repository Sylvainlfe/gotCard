import React from "react";
import "../style/card.css";

function Card({ character }) {

  return (
    <article key={character.id} className="characterCard">
      <figure className="containImg">
        <img
          src={character.imageUrl}
          alt={character.fullName}
          className="characterImg"
        />
      </figure>
      <figcaption className="containDescription">
        <h2 className="titleCard">{character.fullName}</h2>
        <p>
          <strong>First Name:</strong> {character.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {character.lastName}
        </p>
        <p>
          <strong>Title:</strong> {character.title}
        </p>
        <p>
          <strong>Family:</strong> {character.family}
        </p>
      </figcaption>
    </article>
  );
}

export default Card;
