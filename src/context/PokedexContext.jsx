import { createContext, useState, useEffect } from "react";

export const PokedexContext = createContext();

export const PokedexProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState(() => {
    return JSON.parse(localStorage.getItem("pokemonUrl") || "[]");
  });

  const addPokemon = (pokemon) => {
    setPokedex((prev) => {
      const exists = prev.find((poke) => poke.name === pokemon.name);
      // console.log(exists);

      if (exists) {
        console.log(`${pokemon.name} is already in your pokédex!`);
        return prev;
      }
      return [...prev, pokemon];
    });
  };

  const removeFromStorage = (key) => {
    localStorage.removeItem(key);
  };

  useEffect(() => {
    localStorage.setItem("pokemonUrl", JSON.stringify(pokedex));
  }, [pokedex]);

  return (
    <PokedexContext.Provider value={{ pokedex, addPokemon, removeFromStorage }}>
      {children}
    </PokedexContext.Provider>
  );
};
