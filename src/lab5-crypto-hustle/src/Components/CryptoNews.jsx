import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function CryptoNews() {
  const [newsList, setNewsList] = useState(null);

  useEffect(() => {
    const getNewsArticles = async () => {
      const response = await fetch(
        "https://cryptocurrency.cv/api/news?limit=10",
      );
      const json = await response.json();
      console.log(json);
      setNewsList(json.articles); // field name will vary by API — check the docs
    };
    getNewsArticles().catch(console.error);
  }, []);

  return (
    <div>
      <h3>Crypto News</h3>
      <ul className="side-list">
        {newsList &&
          newsList.map((article, index) => (
            <li className="news-article" key={index}>
              <a href={article.link}>{article.title}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default CryptoNews;
