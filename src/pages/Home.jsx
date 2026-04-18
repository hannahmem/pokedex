import { Link } from "react-router-dom";
import LocationList from "../components/LocationList";
// import PokemonsList from "./components/PokemonsList";

function Home() {
  return (
    <div>
      {/* <PokemonsList /> */}
      <LocationList />
      <Link to="/pokedex">Pokedex</Link>
    </div>
  );
}

export default Home;
