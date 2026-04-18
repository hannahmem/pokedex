import { Link } from "react-router-dom";

function NavBar({ pokedex }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/pokedex">{pokedex}</Link>
    </nav>
  );
}

export default NavBar;
