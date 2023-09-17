import React from "react";
import "./pages/home/style.css";
import Header from "./global/sections/Header";
import HeroSection from "./pages/home/sections/HeroSection";
import EmojiSection from "./pages/home/sections/EmojiSection";
import MovieAndSeriesSections from "./pages/home/sections/MovieAndSeriesSections";

const page = () => {
  return (
    <div className="container">
      <Header />
      <HeroSection />
      <EmojiSection />
      <MovieAndSeriesSections />
    </div>
  );
};

export default page;
