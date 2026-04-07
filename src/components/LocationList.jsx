import { useEffect, useState } from "react";

function LocationList() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/location-area/1")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  return <div></div>;
}

export default LocationList;
