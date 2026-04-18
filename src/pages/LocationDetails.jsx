import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import PokemonPreview from "../components/PokemonPreview";
import { PokedexContext } from "../context/PokedexContext";

function LocationDetails() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [pokemon, setPokemon] = useState([]);
  const { pokedex, addPokemon, removeFromStorage } = useContext(PokedexContext);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/location-area/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLocation(data);

        data.pokemon_encounters.forEach((poke) =>
          fetch(poke.pokemon.url)
            .then((res) => res.json())
            .then((pokeData, i) => {
              // console.log(pokeData);
              setPokemon((prev) => [...prev, pokeData]);
            }),
        );
      });
  }, []);

  return (
    <div>
      <NavBar pokedex="Pokédex" />
      <h1>
        {location && location.location.name.toUpperCase()}{" "}
        {/* {console.log(location)} */}
      </h1>
      {pokemon &&
        pokemon.map((poke, index) => (
          <li key={index}>
            <PokemonPreview
              name={poke?.name}
              image={poke?.sprites?.front_default}
              height={poke?.height}
              weight={poke?.weight}
              type={poke?.types}
            />
            <button onClick={() => addPokemon(poke)}>Capture</button>
            {/* <p>URLs {pokedex}</p> */}
            <button onClick={() => removeFromStorage("pokemonUrl", poke)}>
              Remove from storage
            </button>
          </li>
        ))}
    </div>
  );
}

export default LocationDetails;

// {pokemon &&
//   pokemon.map((poke, index) => (
//     <div className="pokemon-preview" key={index}>
//       <h2>{poke?.name}</h2>
//       <img
//         src={poke?.sprites?.front_default}
//         alt={`${poke?.name}'s colored drawing`}
//       />
//       <p>Height {poke?.height}</p>
//       <p>Weight {poke?.weight}</p>
//       {poke?.types?.map((type) => (
//         <div key={type.slot}>
//           <p>{type.type.name}</p>
//           <img
//             src={typeIcons[type.type.name]}
//             alt={`${type.type.name} icon`}
//             width={25}
//           />
//         </div>
//       ))}
//       <button onClick={() => addPokemon(pokemon)}>Capture</button>
//       <p>URLs {pokedex}</p>
//     </div>
//   ))}
