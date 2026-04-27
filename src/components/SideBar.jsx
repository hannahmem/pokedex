import Pokedex from "../pages/Pokedex";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";

function SideBar() {
  const { pokedex: pokemon } = useContext(PokedexContext);
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);

  function openSideBar() {
    isActive ? setIsActive(false) : setIsActive(true);
  }

  return (
    <aside id="sidebar" className={`${isActive ? "open" : "close"}`}>
      <div className="pokedex-title">
        <h2 className={`${isActive ? "open" : "close"}`}>Pokedex</h2>
        <button onClick={openSideBar}>
          <img
            src="../../public/icons/Pokedex.png"
            alt="Pokedex icon"
            width={35}
          />
        </button>
      </div>
      {/* <Pokedex /> */}
      {pokemon.map((poke, index) => (
        <Link to={`pokemon/${poke.id}`} key={index} className="sidebar-poke">
          <img src={poke.sprites.front_default} alt={`${poke.name} icon`} />
          <h3>{poke.name}</h3>
        </Link>
      ))}
      <Link
        to="/pokedex"
        className={`pokedex-link ${isActive ? "open" : "close"}`}>
        Pokédex
      </Link>
    </aside>
  );
}

export default SideBar;
