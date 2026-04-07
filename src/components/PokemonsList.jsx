import { useEffect, useState } from "react";

function PokemonsList() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => setPokemon(data.results));
  }, []);

  return (
    <div>
      <h1>Pokédex</h1>
      <ul>
        {pokemon &&
          pokemon.map((poke, index) => (
            <li key={index}>
              <h2>{poke.name}</h2>
              {/* <img src={} /> */}
              {/* {console.log(poke)} */}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PokemonsList;
