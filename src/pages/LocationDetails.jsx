import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import PokemonPreview from "../components/PokemonPreview";
import { PokedexContext } from "../context/PokedexContext";

function LocationDetails() {
  const [location, setLocation] = useState(null);
  const { id } = useParams();
  const { addPokemon } = useContext(PokedexContext);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/location-area/${id}`)
      .then((res) => res.json())
      .then((data) => setLocation(data));
  }, []);

  return (
    <div>
      <NavBar />
      <h1>
        {location && location.location.name.toUpperCase()}{" "}
        {console.log(location)}
      </h1>
      {location &&
        location.pokemon_encounters.map((pokemon, index) => (
          <li key={index}>
            {console.log(pokemon.pokemon)}
            <PokemonPreview pokeUrl={pokemon.pokemon.url} />
            <button onClick={() => addPokemon(pokemon.pokemon.name)}>
              Capture
            </button>
          </li>
        ))}
    </div>
  );
}

export default LocationDetails;
