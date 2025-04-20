import React, { useState } from "react";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="min-h-screen bg-[#0A0F1A] flex flex-col justify-between">
   
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-lg">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            We Value Your Feedback
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded-lg bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>

            <div className="flex flex-col items-center">
              <p className="text-white mb-2">Rate Your Experience</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRating(star)}
                    className={`text-2xl ${
                      star <= rating ? "text-yellow-400" : "text-white"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="bg-cyan-400 text-[#0A0F1A] font-semibold py-3 rounded-lg hover:bg-cyan-300 transition duration-300 mt-4"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>

      <footer className="bg-[#0A0F1A] text-white py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold">CryptoWorld</h4>
            <p className="text-sm text-white/70">
              Latest crypto news, market trends, and live coin updates.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FeedbackForm;
