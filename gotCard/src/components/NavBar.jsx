import { useState } from "react";
import "../style/navBar.css";

function NavBar({}) {
  const [showBurger, setShowBurger] = useState(false);

  const handelShowLinks = () => {
    setShowBurger(!showBurger)
  }

  return (
    <header className={`header ${showBurger ? "show-nav" : "hide-nav"}`}>
      <nav>
        <a href="" className="logo_link">
          <h2 className="logo">Got Card</h2>
        </a>
      </nav>
        <ul className="navBar_links">
          <a href="" className="navBar_link">
            <li className="navBar_item">Accueil</li>
          </a>
          <a href="" className="navBar_link">
            <li className="navBar_item">Personnages</li>
          </a>
          <a href="" className="navBar_link">
            <li className="navBar_item">Familles</li>
          </a>
          <a href="" className="navBar_link">
            <li className="navBar_item">Credits</li>
          </a>
        </ul>
        <button className="navBar_burger" type="button" onClick={handelShowLinks}>
          <span className="burger_menu"></span>
        </button>
    </header>
  );
}
export default NavBar;
