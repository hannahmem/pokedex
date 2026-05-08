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
        <h2 className={`${isActive ? "open" : "close"}`}>Pokédex</h2>
        <button onClick={openSideBar}>
          <img
            src="../../public/icons/Pokedex.png"
            alt="Pokedex icon"
            width={35}
          />
        </button>
      </div>
      {pokemon.length === 0 && (
        <h3 className={`${isActive ? "open" : "close"}`}>
          Your Pokédex is empty. Try catching your first Pokémon!
        </h3>
      )}
      {/* <Pokedex /> */}
      {pokemon.map((poke, index) => (
        <Link to={`/pokemon/${poke.id}`} key={index} className="sidebar-poke">
          <img src={poke.sprites.front_default} alt={`${poke.name} icon`} />
          <h3>{poke.name}</h3>
        </Link>
      ))}
      <Link
        to="/pokedex"
        className={`pokedex-link ${isActive ? "open" : "close"}`}>
        My Pokémon
      </Link>
    </aside>
  );
}

export default SideBar;
