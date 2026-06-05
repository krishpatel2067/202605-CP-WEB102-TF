import samosa from "./assets/samosa.png";
import "./App.css";
import { useState } from "react";

const UPGRADES = [
  { name: "Double Stuffed 👯‍♀️", desc: "2x per click", cost: "10 samosas" },
  { name: "Party Pack 🎉", desc: "5x per click", cost: "100 samosas" },
  { name: "Full Feast 👩🏽‍🍳", desc: "10x per click", cost: "1000 samosas" },
];

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const updateCount = () => setCount((prev) => prev + multiplier);

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src={samosa} onClick={updateCount} />
      </div>

      <div className="container">
        {UPGRADES.map((upgrade) => (
          <div className="upgrade">
            <h3>{upgrade.name}</h3>
            <p>{upgrade.desc}</p>
            <button>{upgrade.cost}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
