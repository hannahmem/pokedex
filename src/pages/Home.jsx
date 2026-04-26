import { Link } from "react-router-dom";
import LocationList from "../components/LocationList";
import SideBar from "../components/SideBar";
// import PokemonsList from "./components/PokemonsList";

function Home() {
  return (
    <div className="home">
      {/* <PokemonsList /> */}
      <SideBar />
      <main>
        <img
          src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png"
          alt="Pokemon logo"
          width={200}
        />
        <LocationList />
      </main>
    </div>
  );
}

export default Home;
