import { createContext, useState } from "react";

export const PokedexContext = createContext();

export const PokedexProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);

  const addPokemon = (pokemon) => {
    setPokedex((prev) => [...prev, pokemon]);
  };

  return (
    <PokedexContext.Provider value={{ pokedex, addPokemon }}>
      {children}
    </PokedexContext.Provider>
  );
};
