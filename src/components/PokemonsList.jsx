import { useEffect, useState } from "react";

function PokemonsList() {
  const [pokemon, setPokemon] = useState(null);
  const [offset, setOffset] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPokemon(data.results));
  }, [url]);

  function handlePreviousPage() {
    setOffset((prev) => (prev > 0 ? prev - 20 : prev));
    setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
  }

  function handleNextPage() {
    setOffset((prev) => prev + 20);
    setPageNumber((prev) => prev + 1);
  }

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

      <button onClick={() => handlePreviousPage()}>Previous</button>
      <span>Page {pageNumber}</span>
      <button onClick={() => handleNextPage()}>Next</button>
    </div>
  );
}

export default PokemonsList;
