import { useState, useEffect } from "react";

function PokemonPreview({ name, image, height, weight, type, typeIcon }) {
  // const [pokemon, setPokemon] = useState(null);

  const typeIcons = {
    bug: "../../public/icons/bug.svg",
    dark: "../../public/icons/dark.svg",
    dragon: "../../public/icons/dragon.svg",
    electric: "../../public/icons/electric.svg",
    fairy: "../../public/icons/fairy.svg",
    fighting: "../../public/icons/fighting.svg",
    fire: "../../public/icons/fire.svg",
    flying: "../../public/icons/flying.svg",
    ghost: "../../public/icons/ghost.svg",
    grass: "../../public/icons/grass.svg",
    ground: "../../public/icons/ground.svg",
    ice: "../../public/icons/ice.svg",
    normal: "../../public/icons/normal.svg",
    poison: "../../public/icons/poison.svg",
    psychic: "../../public/icons/psychic.svg",
    rock: "../../public/icons/rock.svg",
    steel: "../../public/icons/steel.svg",
    water: "../../public/icons/water.svg",
  };

  // useEffect(() => {
  //   fetch(pokeUrl)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setPokemon(data);
  //     });
  // }, [pokeUrl]);

  return (
    <div className="pokemon-preview">
      <h2>{name}</h2>
      <img src={image} alt={`${name}'s colored drawing`} />
      <p>Height {height}</p>
      <p>Weight {weight}</p>
      {type?.map((poke) => (
        <div key={poke.slot}>
          <p>{poke.type.name}</p>
          <img
            src={typeIcons[poke.type.name]}
            alt={`${poke.type.name} icon`}
            width={25}
          />
        </div>
      ))}
    </div>
  );
}

export default PokemonPreview;
