import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Pokedex from "./Pokedex";

function PokemonDetails() {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
      });
  }, []);

  return (
    <>
      <NavBar pokedex="Pokédex" />
      {pokemon && (
        <div className="container">
          <h1>{pokemon.name.toUpperCase()}</h1>
          <img
            src={pokemon.sprites.front_default}
            alt={`${pokemon.name}'s front side drawing`}
            width={180}
          />
          <div>
            <audio controls="controls">
              <source src={pokemon.cries.latest} type="audio/ogg" />
            </audio>
          </div>
          <div className="weigth-container">
            <h3>Weigth</h3>
            <p>{pokemon.weight}</p>
          </div>
          <div>
            <h3>Type</h3>
            {pokemon.types.map((type) => (
              <p key={type.slot}>{type.type.name} </p>
            ))}
          </div>
          <div className="stats-container">
            <h3>Stats</h3>
            {pokemon.stats.map((stats, index) => (
              <li key={index}>
                {stats.stat.name} {stats.base_stat}
              </li>
            ))}
          </div>
          <div className="move-container">
            <h3>Moves</h3>
            {pokemon.moves.map((moves, index) => (
              <li key={index}>{moves.move.name} </li>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default PokemonDetails;
