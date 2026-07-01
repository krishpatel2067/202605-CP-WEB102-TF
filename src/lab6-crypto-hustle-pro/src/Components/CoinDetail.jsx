import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinChart from "./CoinChart";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function CoinDetail() {
  const { id } = useParams();
  const [fullDetails, setFullDetails] = useState(null);

  useEffect(() => {
    const getCoinDetail = async () => {
      const details = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}`,
        {
          headers: {
            "x-cg-demo-api-key": API_KEY,
          },
        },
      );
      const detailsJson = await details.json();
      console.log(detailsJson);
      setFullDetails(detailsJson);
    };

    getCoinDetail().catch(console.error);
  }, [id]);

  if (fullDetails != null) {
    return (
      <>
        <h1>{fullDetails.name}</h1>
        <img
          className="images"
          src={fullDetails.image.large}
          alt={`Small icon for ${fullDetails.name} crypto coin`}
        />
        <div> {fullDetails.description.en}</div>
        <br></br>
        <table>
          <tbody>
            <tr>
              <th>Launch Date</th>
              <td>{fullDetails.genesis_date}</td>
            </tr>
            <tr>
              <th>Website</th>
              <td>
                <a target="_blank" href={fullDetails.links.homepage}>
                  {fullDetails.links.homepage}
                </a>
              </td>
            </tr>
            <tr>
              <th>Whitepaper</th>
              <td>
                <a target="_blank" href={fullDetails.links.whitepaper}>
                  {fullDetails.links.whitepaper}
                </a>
              </td>
            </tr>
            <tr>
              <th>Monetary Symbol</th>
              <td>{fullDetails.symbol}</td>
            </tr>
            <tr>
              <th>Current Price</th>
              <td>
                ${fullDetails.market_data.current_price.usd.toLocaleString()}
              </td>
            </tr>
            <tr>
              <th>Highest Price in the last 24 hours</th>
              <td>${fullDetails.market_data.high_24h.usd.toLocaleString()}</td>
            </tr>
            <tr>
              <th>Lowest Price in the last 24 hours</th>
              <td>${fullDetails.market_data.low_24h.usd.toLocaleString()}</td>
            </tr>
            <tr>
              <th>Change in the last 24 hours </th>
              <td>
                $
                {fullDetails.market_data.price_change_24h_in_currency.usd.toLocaleString()}
              </td>
            </tr>
            <tr>
              <th>Volume</th>
              <td>
                ${fullDetails.market_data.total_volume.usd.toLocaleString()}
              </td>
            </tr>
            <tr>
              <th>Market Cap</th>
              <td>
                ${fullDetails.market_data.market_cap.usd.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
        <CoinChart id={id} symbol={fullDetails.symbol} />
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default CoinDetail;
