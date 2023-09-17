import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import axios from "axios";
import options from "@/app/global/components/ApiOptions";

const SwiperSlides = ({ title, path }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/${path}`;
    const res = await axios.get(url, options);
    const data = await res.data.results;
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movieAndSeriesSections">
      <h3>{title}</h3>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={15}
        navigation={true}
        modules={[Navigation]}
        className="swiper"
      >
        {movies.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt="a"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperSlides;
