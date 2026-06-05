import samosa from "./assets/samosa.png";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const updateCount = () => setCount((prev) => prev + multiplier);
  const UPGRADES = [
    {
      name: "Double Stuffed 👯‍♀️",
      mult: 2,
      cost: 10,
    },
    {
      name: "Party Pack 🎉",
      mult: 5,
      cost: 100,
    },
    {
      name: "Full Feast 👩🏽‍🍳",
      mult: 10,
      cost: 1000,
    },
  ];

  const applyUpgrade = (cost, mult) => {
    if (count >= cost) {
      setMultiplier(multiplier * mult);
      setCount((prev) => prev - cost);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src={samosa} onClick={updateCount} />
      </div>

      <div className="container">
        {UPGRADES.map((upgrade, i) => (
          <div className="upgrade" key={i}>
            <h3>{upgrade.name}</h3>
            <p>{upgrade.mult}x per click</p>
            <button onClick={() => applyUpgrade(upgrade.cost, upgrade.mult)}>
              {upgrade.cost} samosas
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
