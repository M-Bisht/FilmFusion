"use client";
import React, { useContext } from "react";
import "./home/style.css";
import Header from "./global/sections/Header";
import HeroSection from "./home/sections/HeroSection";
import EmojiSection from "./home/sections/EmojiSection";
import MovieAndSeriesSections from "./home/sections/MovieAndSeriesSections";
import { MainContext } from "./context/Context";
const Page = () => {
  const { pageLoading, setPageLoading } = useContext(MainContext);
  return (
    <div className="container">
      <Header />
      <HeroSection />
      {pageLoading ? null : (
        <>
          <EmojiSection />
          <MovieAndSeriesSections />
        </>
      )}
    </div>
  );
};

export default Page;
