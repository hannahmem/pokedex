import { useContext, useEffect, useState } from "react";
import { PokedexContext } from "../context/PokedexContext";
import NavBar from "../components/NavBar";

function Pokedex() {
  //   const [pokemon, setPokemon] = useState(null);
  const { pokedex } = useContext(PokedexContext);
  console.log(pokedex);

  //   console.log(pokedex);

  //   useEffect(() => {
  //     pokedex.map((url) =>
  //       fetch(url)
  //         .then((res) => res.json())
  //         .then((data) => console.log(data)),
  //     );
  //   });

  return (
    <div>
      <NavBar />
    </div>
  );
}

export default Pokedex;
