import React, { useEffect, useState } from 'react';
import Loading from './Loading';
const API_KEY = "02adacb49c4849fe9b6e7845b3ae54e5";
const BASE_URL = "https://newsapi.org/v2/everything?q=";

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('Crypto Coins');
  const [curSelectedNav, setCurSelectedNav] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews(query);
  }, [query]);

  async function fetchNews(searchQuery) {
     try {
       const res = await fetch(`${BASE_URL}${searchQuery}&apiKey=${API_KEY}`);
       const data = await res.json();
   
       const filteredArticles = (data.articles || []).filter(article => article.urlToImage);
   
       setArticles(filteredArticles);
     } catch (error) {
       console.error("Error fetching news:", error);
     } finally{
       setLoading(false);
     }

   }
  function handleNavItemClick(id) {
    setQuery(id);
    setCurSelectedNav(id);
  }

  function handleSearch() {
     const input = document.getElementById('search-input');
     const value = input.value.trim().toLowerCase();
     if (value === '') return;
   
     if (value.includes('crypto') || value.includes('stock') || value.includes('coin') || value.includes('cryptocurrency') || value.includes('market') || value.includes('ethereum') || value.includes('nifty') || value.includes('sensex')) {
       setQuery(value);
       setCurSelectedNav(null);
     } else {
       alert('Please search only topics related to Crypto or Stocks!');
     }
   }


  if (loading) return <Loading />;
  return (
    <div style={{ backgroundColor : '#111827' , }}>
     

      {/* Search Bar */}
      <div className=" flex justify-center gap-[2rem] items-center text-white pt-10" >
        <input className='border-4  border-cyan-400 rounded-lg shadow-[0_0_10px_cyan] p-3' id="search-input" type="text"   placeholder="Search News..." />
        <button id="search-button" className=' bg-cyan-400 p-3 rounded-lg shadow-[0_0_10px_cyan] cursor-pointer'  onClick={handleSearch}>Search</button>
      </div>

      {/* Cards Container */}
      <div id="cards-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-10  "> 
        {articles.map((article, idx) => (
          article.urlToImage ? (
            <div className="m-5 border-4  border-cyan-400 rounded-lg shadow-[0_0_10px_cyan] p-8 text-white bg-black hover:scale-105 transition-all duration-300 ease-in-out " key={idx} onClick={() => window.open(article.url, '_blank')}>
              <img  src={article.urlToImage} alt="news" id="news-img" className="hover:scale-105 transition-all duration-300 ease-in-out w-320 rounded-full" />
              <div className="mt-4  " style={{ color: '#00FFFF' , fontFamily : 'Exo' }} >
              <h3 id="news-title">{article.title}</h3>
              <p id="news-desc">{article.description}</p>
              <p id="news-source">
                {article.source.name} - {new Date(article.publishedAt).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })}
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
