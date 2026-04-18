import "./App.css";
import PokemonsList from "./components/PokemonsList";
import PokemonDetails from "./pages/PokemonDetails";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import LocationList from "./components/LocationList";
import LocationDetails from "./pages/LocationDetails";
import Pokedex from "./pages/Pokedex";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemons" element={<PokemonsList />} />
      <Route path="/locations" element={<LocationList />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
      <Route path="/location/:id" element={<LocationDetails />} />
      <Route path="/pokedex/" element={<Pokedex />} />
    </Routes>
  );
}

export default App;
