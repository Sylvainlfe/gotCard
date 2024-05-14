import React from "react";
import "../style/map.css"

function Map({ country }) {
  return (
    <section className="containContinents">
      {country.map((toto) => (

          <p key={toto.id} className="continentsName">
            {toto.name}
          </p>

      ))}
    </section>
  );
}

export default Map;
