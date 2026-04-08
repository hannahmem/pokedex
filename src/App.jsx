import "./App.css";
import PokemonsList from "./components/PokemonsList";
import PokemonDetails from "./components/PokemonDetails";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import LocationList from "./components/LocationList";
import LocationDetails from "./components/LocationDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemons" element={<PokemonsList />} />
      <Route path="/locations" element={<LocationList />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
      <Route path="/location/:id" element={<LocationDetails />} />
    </Routes>
  );
}

export default App;
