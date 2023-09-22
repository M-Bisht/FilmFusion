"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import options from "@/app/global/comps/ApiOptions";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { MainContext } from "@/app/context/Context";
import Loader from "@/app/global/comps/Loader";

const HeroSection = () => {
  const [movies, setMovies] = useState([]);
  const { pageLoading, setPageLoading } = useContext(MainContext);

  const fetchMovies = async () => {
    setPageLoading(true);
    try {
      setTimeout(async () => {
        const url = `https://api.themoviedb.org/3/discover/movie?language=en-US&page=2&sort_by=popularity.desc`;
        const res = await axios.get(url, options);
        const data = await res.data.results;
        setMovies(data);
        setPageLoading(false);
      }, 2000);
    } catch (error) {
      console.log("fetch movie error", error);
      setPageLoading(true);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
          // disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="heroSection"
      >
        {movies.map((movie, index) => {
          return (
            <SwiperSlide key={index} className="imageDivs">
              <img
                src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                alt={movie.title}
              />
              <div></div>
            </SwiperSlide>
          );
        })}
        {/* <div className="heroSectionOverlay"></div> */}
      </Swiper>
      {pageLoading ? <Loader /> : null};
    </>
  );
};

export default HeroSection;
