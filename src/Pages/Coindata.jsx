import React, { useEffect, useState } from "react";
import coinsData from "../assets/Array.json";
import vdo from "../assets/my-movie.mp4"
import Loading from "./Loading";

function RandomCoins() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCoins() {
      const ids = getRandomIds(coinsData);
      const idsString = ids.join(","); 
      
      try {
        const response = await fetch(
          `/api/coins/markets?vs_currency=usd&ids=${idsString}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              "x-cg-api-key": "CG-P36eHv2gCriKmsBt4SX7bPjf"
            }
          }
        );
        const data = await response.json();
        setCoins(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching coins:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCoins();
  }, []);

  function getRandomIds(data, count = 15) {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);
    return selected.map(item => item.id);
  }

  if (loading) return  <Loading/>;

  return (
     <div className="relative min-h-screen overflow-hidden">
    
       <video
         autoPlay
         loop
         muted
         playsInline
         className="absolute top-0 left-0 w-full h-full object-cover -z-10 "
       >
         <source src={vdo} type="video/mp4" />
         Your browser does not support the video tag.
       </video>
 
     
       <div className="flex flex-col items-center px-4 py-8 min-h-screen bg-[#0A0F1A]/80 ">
         <div className="w-full max-w-2xl space-y-4 ">
         {coins.map((coin) => (
  <div
    key={coin.id}
    onClick={() => {
      const url = `https://platform.arkhamintelligence.com/explorer/token/${coin.id}`;
      if (url) {
        window.open(url, "_blank");
      } else {
        alert("Website not available for this coin.");
      }
    }}
    className="flex items-center justify-between bg-[#0A0F1A] border-2 border-purple-500 rounded-lg p-4 shadow-[0_0_10px_#A020F0,0_0_20px_#A020F0] text-white
    transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_#A020F0,0_0_30px_#A020F0] cursor-pointer"
  >
    <div className="flex items-center gap-4">
      <img
        src={coin.image}
        alt={coin.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <h4 className="text-lg font-semibold">{coin.name}</h4>
    </div>

    <div className="text-xl font-bold">
      ${coin.current_price?.toFixed(5)}
    </div>
  </div>
))}
         </div>
       </div>
     </div>
   );
}

export default RandomCoins;