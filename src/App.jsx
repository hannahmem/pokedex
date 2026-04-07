import "./App.css";
import PokemonsList from "./components/PokemonsList";
import PokemonDetails from "./components/PokemonDetails";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemons" element={<PokemonsList />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
    </Routes>
  );
}

export default App;
