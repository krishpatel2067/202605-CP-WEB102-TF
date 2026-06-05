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
      desc: "2x per click",
      cost: "10 samosas",
      func: () => {
        if (count >= 10) {
          setMultiplier(multiplier * 2);
        }
      },
    },
    {
      name: "Party Pack 🎉",
      desc: "5x per click",
      cost: "100 samosas",
      func: () => {
        if (count >= 100) {
          setMultiplier(multiplier * 5);
        }
      },
    },
    {
      name: "Full Feast 👩🏽‍🍳",
      desc: "10x per click",
      cost: "1000 samosas",
      func: () => {
        if (count >= 1000) {
          setMultiplier(multiplier * 10);
        }
      },
    },
  ];

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
            <p>{upgrade.desc}</p>
            <button onClick={upgrade.func}>{upgrade.cost}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
