import React, { useEffect, useState } from 'react';
import Loading from './Loading';

const API_KEY = "9c26d9038ab314b65022b8810456229d";
const BASE_URL = "https://gnews.io/api/v4/search?q=";

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('Crypto Coins');
  const [curSelectedNav, setCurSelectedNav] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews(query);
  }, [query]);

  async function fetchNews(searchQuery) {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}${encodeURIComponent(searchQuery)}&lang=en&token=${API_KEY}`);
      const data = await res.json();
      
      const filteredArticles = (data.articles || []).filter(article => article.image);

      setArticles(filteredArticles);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleNavItemClick(id) {
    setQuery(id);
    setCurSelectedNav(id);
  }

  function handleSearch() {
    const input = document.getElementById('search-input');
    const value = input.value.trim();
    if (value === '') return;

    const lowerValue = value.toLowerCase();
    if (
      lowerValue.includes('crypto') ||
      lowerValue.includes('stock') ||
      lowerValue.includes('coin') ||
      lowerValue.includes('cryptocurrency') ||
      lowerValue.includes('market') ||
      lowerValue.includes('ethereum') ||
      lowerValue.includes('nifty') ||
      lowerValue.includes('sensex')
    ) {
      setQuery(value);
      setCurSelectedNav(null);
    } else {
      alert('Please search only topics related to Crypto or Stocks!');
    }
  }

  if (loading) return <Loading />;

  return (
    <div style={{ backgroundColor: '#111827' }}>
     
      <div className="flex justify-center gap-[2rem] items-center text-white pt-10">
        <input
          className="border-4 border-cyan-400 rounded-lg shadow-[0_0_10px_cyan] p-3"
          id="search-input"
          type="text"
          placeholder="Search News..."
        />
        <button
          id="search-button"
          className="bg-cyan-400 p-3 rounded-lg shadow-[0_0_10px_cyan] cursor-pointer"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div id="cards-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-10">
        {articles.map((article, idx) => (
          article.image ? (
            <div
              key={idx}
              className="m-5 border-4 border-cyan-400 rounded-lg shadow-[0_0_10px_cyan] p-8 text-white bg-black hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={() => window.open(article.url, '_blank')}
            >
              <img
                src={article.image}
                alt="news"
                className="hover:scale-105 transition-all duration-300 ease-in-out w-full rounded-full"
              />
              <div className="mt-4" style={{ color: '#00FFFF', fontFamily: 'Exo' }}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <p>
                  {article.source?.name} - {new Date(article.publishedAt).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })}
                </p>
              </div>
            </div>
          ) : null
        ))}
      </div>
    </div>
  );
};

export default NewsApp;