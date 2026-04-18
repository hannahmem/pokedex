import { useContext, useEffect, useState } from "react";
import { PokedexContext } from "../context/PokedexContext";
import NavBar from "../components/NavBar";
import PokemonPreview from "../components/PokemonPreview";
import { Link, useParams } from "react-router-dom";

function Pokedex() {
  //   const [pokemon, setPokemon] = useState(null);
  const { pokedex } = useContext(PokedexContext);
  // console.log(pokedex.length);

  return (
    <div>
      <NavBar />
      {pokedex.length === 0 && (
        <h3>Your Pokédex is empty. Try catching your first Pokémon!</h3>
      )}
      {pokedex.map((poke, index) => (
        <li key={index}>
          <PokemonPreview
            name={poke?.name}
            image={poke?.sprites?.front_default}
            height={poke?.height}
            weight={poke?.weight}
            type={poke?.types}
          />
          <Link to={`/pokemon/${poke.id}`}>View Pokemon details</Link>
        </li>
      ))}
    </div>
  );
}

export default Pokedex;
