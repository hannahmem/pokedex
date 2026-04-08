import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LocationList() {
  const [location, setLocation] = useState(null);
  const [offset, setOffset] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const url = `https://pokeapi.co/api/v2/location-area/?limit=20&offset=${offset}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLocation(data.results);
      });
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
      <h1>Pokémon</h1>
      <h3>Choose an area to capture your pokémon</h3>
      {location &&
        location.map((loc, index) => (
          <li key={index}>
            <Link to={`/location/${loc.name}`}>{loc.name}</Link>
          </li>
        ))}

      <button onClick={() => handlePreviousPage()}>Previous</button>
      <span>Page {pageNumber}</span>
      <button onClick={() => handleNextPage()}>Next</button>
    </div>
  );
}

export default LocationList;
