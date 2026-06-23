import { useEffect, useState } from "react";
import "./App.css";
import CoinInfo from "../../lab4-cap/src/Components/CoinInfo";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState(null);

  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1",
        {
          headers: {
            "x-cg-demo-api-key": API_KEY,
          },
        },
      );
      const data = await response.json();
      console.log(data);
      setList(data);
    };
    fetchAllCoinData().catch(console.error);
  }, []);

  return (
    <div className="whole-page">
      <h1>My Crypto List</h1>
      <ul>
        {list?.map((coin) => (
          <CoinInfo
            key={coin.id}
            id={coin.id}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
