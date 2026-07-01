import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
} from "recharts";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const CoinChart = ({ id, symbol }) => {
  const [histData, setHistData] = useState(null);

  useEffect(() => {
    const getCoinHist = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily&precision=2`,
        {
          headers: {
            "x-cg-demo-api-key": API_KEY,
          },
        },
      );

      const json = await response.json();
      console.log(json);
      setHistData(json.prices);
    };
    getCoinHist().catch(console.error);
  }, [id]);

  const cleanData = (data) => {
    return data.map(([timestamp, price]) => {
      const date = new Date(timestamp);

      return {
        time: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
        price: Number(price),
      };
    });
  };

  return (
    <div>
      {histData ? ( // rendering only if API call actually returned us data
        <div>
          <br></br>
          <h2>30-Day Price Data for {symbol}</h2>

          <LineChart
            width={1300}
            height={400}
            data={cleanData(histData)}
            margin={{
              top: 10,
              right: 30,
              left: 20,
              bottom: 30,
            }}
          >
            <Line
              type="monotone"
              dataKey="price"
              stroke="#ffffff"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5 }}
            />
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis
              dataKey="time"
              interval={2}
              angle={20}
              dy={5}
              tick={{ fill: "white" }}
            >
              <Label
                value="Date and Time"
                offset={0}
                position="insideBottom"
                dy={50}
                fill="white"
              />
            </XAxis>

            <YAxis
              tick={{ fill: "white" }}
              label={{
                value: "Price",
                angle: -90,
                position: "insideLeft",
                textAnchor: "middle",
                dx: -18,
                fill: "white",
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#4b5563",
                color: "white",
                border: "none",
              }}
              formatter={(value) => [
                `$${Number(value).toLocaleString()}`,
                "Price",
              ]}
              labelFormatter={(label) => `Date: ${label}`}
            />
          </LineChart>
        </div>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};

export default CoinChart;
