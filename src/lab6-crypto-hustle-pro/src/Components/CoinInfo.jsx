import { Link } from "react-router";

const CoinInfo = ({ id, image, name, symbol, price }) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`/coinDetails/${id}`}
      key={symbol}
    >
      <li className="main-list" key={id}>
        <img
          className="icons"
          src={image}
          alt={`Small icon for ${name} crypto coin`}
        />
        {name}
        <span className="tab"></span>
        {price != null ? ` $${price.toLocaleString()} USD` : null}
      </li>
    </Link>
  );
};

export default CoinInfo;
