"use client";
import React from "react";
import Carousel from "../comps/Carousel";

const MovieAndSeriesSections = () => {
  return (
    <>
      <Carousel title="Popular" path="movie/popular" />
      <Carousel title="Top Rated" path="movie/top_rated" />
      <Carousel title="Upcoming" path="movie/upcoming" />
    </>
  );
};

export default MovieAndSeriesSections;
