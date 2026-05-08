import { createContext, useState, useEffect } from "react";

export const PokedexContext = createContext();

export const PokedexProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState(() => {
    return JSON.parse(localStorage.getItem("pokemonUrl") || "[]");
  });
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));

  const addPokemon = (pokemon) => {
    setPokedex((prev) => {
      const exists = prev.find((poke) => poke.name === pokemon.name);
      // console.log(exists);

      if (exists) {
        alert(`${pokemon.name} is already in your pokédex!`);
        return prev;
      }

      setRandomNum(Math.floor(Math.random() * 100));
      console.log(randomNum);
      if (randomNum % 2 === 0) {
        alert("Pokemon added to your pokedex");
        return [...prev, pokemon];
      } else {
        alert("you failed to catch the pokemon");
        return prev;
      }
    });
  };

  const removeFromPokedex = (pokemon) => {
    setPokedex((prev) => prev.filter((poke) => poke.name !== pokemon.name));
  };

  useEffect(() => {
    localStorage.setItem("pokemonUrl", JSON.stringify(pokedex));
  }, [pokedex]);

  return (
    <PokedexContext.Provider value={{ pokedex, addPokemon, removeFromPokedex }}>
      {children}
    </PokedexContext.Provider>
  );
};
