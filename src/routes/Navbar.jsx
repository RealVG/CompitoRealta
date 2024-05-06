/* import { Link } from "react-router-dom";
import './../routes/css/Navbar.css';

export default function Navbar() {
  return (
    <nav className="flex gap-10 mb-10 item">
        <ul className={"flex gap-10 navbar"}>
          <Link to={"/" }><img src="./../src/assets/hospital.svg" alt="Immagine ospedale" /></Link>
          <Link className={"item"} to={"/prezzi"}>Prezzi</Link>
          <Link className={"item"} to={"/about"}>About</Link>
          <Link className={"item"} to={"/contattaci"}>Contattaci</Link>
        </ul>
    </nav>
  );
} */

import "./css/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="./../src/assets/hospital.svg" alt="Logo" />
          <span className="navbar-logo-text">ARCH</span>
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/prezzi">Price</Link></li>
        <li><Link to="/contattaci">Contacts</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
