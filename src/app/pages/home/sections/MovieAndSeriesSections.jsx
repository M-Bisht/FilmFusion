"use client";
import React from "react";
import SwiperSlides from "../components/SwiperSlides";

const MovieAndSeriesSections = () => {
  return (
    <>
      <SwiperSlides title="Popular" path="movie/popular" />
      <SwiperSlides title="Top Rated" path="movie/top_rated" />
      <SwiperSlides title="Upcoming" path="movie/upcoming" />
    </>
  );
};

export default MovieAndSeriesSections;
