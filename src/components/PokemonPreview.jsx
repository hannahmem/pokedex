import { useState, useEffect } from "react";

function PokemonPreview({ pokeUrl }) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch(pokeUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
      });
  }, [pokeUrl]);

  return (
    <div className="pokemon-preview">
      <h2>{pokemon?.name}</h2>
      <img
        src={pokemon?.sprites?.front_default}
        alt={`${pokemon?.name}'s colored drawing`}
      />
      <p>Height {pokemon?.height}</p>
      <p>Weight {pokemon?.weight}</p>
      {pokemon?.types?.map((poke) => (
        <li key={poke.slot}>{poke.type.name}</li>
      ))}
    </div>
  );
}

export default PokemonPreview;
