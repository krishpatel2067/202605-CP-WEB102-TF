import samosa from "./assets/samosa.png";
import "./App.css";
import { useState } from "react";

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
    </div>
  );
};

export default App;
