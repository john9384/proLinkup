import { useEffect, useState } from "react";
import Spinner from "../common/spinner/Spinner";

const SideNav = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://news67.p.rapidapi.com/feed?limit=2&skip=0&language=en&source=corriere.it",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "6a50c75a36msh94eb9c76ff5e30bp1448ecjsn1159c3eb53db",
          "x-rapidapi-host": "news67.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setState(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [loading]);

  const NewsCard = state
    ? state.map((news) => {
        return (
          <div key={news.id} className="news-card">
            <h2 className="news-card__title">
              {news.Title.slice(0, 40)}
              {news.Title.length > 40 ? "..." : null}
            </h2>
            <img src={news.Image} alt="" className="news-card__img" />
            <p className="news-card__summary">
              {news.Summary.slice(0, 100)}...
            </p>
            <a
              href={news.Url}
              target="_blank"
              rel="noreferrer"
              className="news-card__cta"
            >
              Read News
            </a>
          </div>
        );
      })
    : null;
  return (
    <div className="side-nav">
      <h1>Trending</h1>
      {loading ? <Spinner /> : NewsCard}
    </div>
  );
};
export default SideNav;
