import React from 'react';

function Home() {
  return (
    <div style={styles.container} >
    
      <section style={styles.hero}>
        <h1 style={styles.title}>Welcome to CryptoWorld 🌐</h1>
        <p style={styles.subtitle}>Get the latest updates on coins, market trends, and crypto news.</p>
        <img
          src="https://images.unsplash.com/photo-1620721791766-436f2b4d5266?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
          alt="Crypto banner"
          style={styles.heroImage}
        />
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Top Coins</h2>
        <div style={styles.coinsGrid}>
          <div style={styles.card}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
              alt="Bitcoin"
              style={styles.coinImage}
            />
            <h3>Bitcoin (BTC)</h3>
            <p>Price: $67,000</p>
          </div>
          <div style={styles.card} >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9MoxYn2yoPOlth1JLi7-5AbW-IQtcxz6y9w&s" 
              alt="Ethereum"
              style={styles.coinImage}
              className=' w-32 h-32 rounded-full ' 
            />
            <h3>Ethereum (ETH)</h3>
            <p>Price: $3,500</p>
          </div>
          <div style={styles.card}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
              alt="Solana"
              style={styles.coinImage}
            />
            <h3>Solana (SOL)</h3>
            <p>Price: $180</p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Latest Crypto News</h2>
        <div style={styles.newsGrid}>
          <div style={styles.newsCard}>
            <img
              src="https://plus.unsplash.com/premium_photo-1681400668073-a1947604dd36?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Yml0Y29pbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="News"
              style={styles.newsImage}
            />
            <h4>Bitcoin hits new all-time high </h4>
            <p>Bitcoin price surges past $67,000 fueled by ETF approval.</p>
          </div>
          <div style={styles.newsCard} >
            <img
              src="https://iq.wiki/_next/image?url=https%3A%2F%2Fipfs.everipedia.org%2Fipfs%2FQmZWWgDrLm3iaxjyaeevrXxXasB4wRYDDJJpko6gPCMEvG&w=3840&q=95"
              alt="News"
              style={styles.newsImage}
            />
            <h4>Ethereum 2.0 Launches 🎉</h4>
            <p>Ethereum transitions to Proof of Stake, slashing energy usage by 99%.</p>
          </div>
        </div>
      </section>
      <footer className="bg-[#0A0F1A] text-white py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold">CryptoWorld</h4>
            <p className="text-sm text-white/70">Latest crypto news, market trends, and live coin updates.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Orbitron', sans-serif",
    backgroundColor: '#0A0F1A',
    color: '#00FFFF',
    minHeight: '100vh',
    padding: '2rem',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  heroImage: {
    width: '100%',
    maxHeight: '400px',
    objectFit: 'cover',
    borderRadius: '20px',
    boxShadow: '0 0 20px #00FFFF',
  },
  section: {
    marginBottom: '4rem',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  coinsGrid: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#111827',
    padding: '1.5rem',
    borderRadius: '12px',
    textAlign: 'center',
    width: '200px',
    boxShadow: '0 0 10px #00FFFF55',

     
  },

  newsGrid: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  newsCard: {
    backgroundColor: '#111827',
    padding: '1.5rem',
    borderRadius: '12px',
    width: '300px',
    boxShadow: '0 0 10px #00FFFF55',
  },
  
  coinImage: {
     width: '60px',
     height: '60px',
     marginBottom: '1rem',
     display: 'block',  
     margin: '0 auto 1rem auto',  
   },
   newsImage: {
     width: '100%',
     height: '150px',
     objectFit: 'cover',
     borderRadius: '10px',
     marginBottom: '1rem',
     display: 'block',   
     margin: '0 auto 1rem auto',  
   },
};

export default Home;