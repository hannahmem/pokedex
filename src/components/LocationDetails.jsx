import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "./NavBar";
import PokemonPreview from "./PokemonPreview";

function LocationDetails() {
  const [location, setLocation] = useState(null);
  const { id } = useParams();

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
            {/* {console.log(pokemon.pokemon.url)} */}
            <PokemonPreview pokeUrl={pokemon.pokemon.url} />
            <button>Capture</button>
          </li>
        ))}
    </div>
  );
}

export default LocationDetails;
