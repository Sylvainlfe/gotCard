import { useState } from "react";
import "../style/navBar.css";
import { Link } from "react-router-dom";

function NavBar({}) {
  const [showBurger, setShowBurger] = useState(false);

  const handelShowLinks = () => {
    setShowBurger(!showBurger);
  };

  return (
    <header className={`header ${showBurger ? "show-nav" : "hide-nav"}`}>
      <Link to="/" className="logo_link">
        <h2 className="logo">Got Card</h2>
      </Link>

      <ul className="navBar_links">
        <Link to="/" className="navBar_link">
          <li className="navBar_item">Accueil</li>
        </Link>
        <Link to="/characters" className="navBar_link">
          <li className="navBar_item">Personnages</li>
        </Link>
        <Link to="/family" className="navBar_link">
          <li className="navBar_item">Familles</li>
        </Link>
        <Link to="/continents" className="navBar_link">
          <li className="navBar_item">Continents</li>
        </Link>
      </ul>
      <button className="navBar_burger" type="button" onClick={handelShowLinks}>
        <span className="burger_menu"></span>
      </button>
    </header>
  );
}
export default NavBar;
