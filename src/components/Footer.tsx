
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "The way to get started is to quit talking and begin doing.",
  "Your time is limited, so don't waste it living someone else's life.",
  "Happiness is not something ready-made. It comes from your own actions.",
  "The purpose of our lives is to be happy.",
  "Life is what happens when you're busy making other plans.",
  "The mind is everything. What you think you become.",
  "Be the change that you wish to see in the world.",
  "In the midst of winter, I found there was, within me, an invincible summer."
];

const Footer = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <footer className="w-full mt-auto pt-12 pb-6 px-6 bg-gradient-to-b from-transparent to-secondary/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 animate-fade-in">
          <div className="px-6 py-5 rounded-2xl bg-white/80 backdrop-blur-sm shadow-soft">
            <p className="font-playfair text-lg italic text-gray-700">"{quote}"</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-200">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-playfair font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
              MindSpring
            </Link>
            <p className="text-sm text-gray-500 mt-1">
              © {new Date().getFullYear()} MindSpring. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/check-in" className="hover:text-primary transition-colors">
              Check-In
            </Link>
            <Link to="/history" className="hover:text-primary transition-colors">
              History
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
