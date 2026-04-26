import Pokedex from "../pages/Pokedex";
import { Link } from "react-router-dom";
import { useState } from "react";

function SideBar() {
  const [isActive, setIsActive] = useState(true);
  console.log(isActive);

  function openSideBar() {
    isActive ? setIsActive(false) : setIsActive(true);
  }

  return (
    <aside id="sidebar" className={`${isActive ? "open" : "close"}`}>
      <div className="pokedex-title">
        <button onClick={openSideBar}>
          <img
            src="../../public/icons/Pokedex.png"
            alt="Pokedex icon"
            width={25}
          />
        </button>
        <h2 className={`${isActive ? "open" : "close"}`}>Pokedex</h2>
      </div>
      <Pokedex />
      <Link to="/pokedex" className={`${isActive ? "open" : "close"}`}>
        Pokedex
      </Link>
    </aside>
  );
}

export default SideBar;
