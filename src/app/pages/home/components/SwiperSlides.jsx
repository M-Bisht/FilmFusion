import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import options from "@/app/global/components/ApiOptions";

const SwiperSlides = ({ title, path }) => {
  const [movies, setMovies] = useState([]);
  const swiperContainerRef = useRef(null);

  const mouseEnter = () => {
    swiperContainerRef.current.style.overflow = "visible";
  };

  const mouseLeave = () => {
    swiperContainerRef.current.style.overflow = "";
  };

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
      <div className="swiperContainer" ref={swiperContainerRef}>
        {movies.map((movie, index) => {
          return (
            <div
              key={index}
              className="swiperDivs"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt="a"
              />
            </div>
          );
        })}
        <button className="one">prev</button>
        <button className="two">next</button>
      </div>
    </div>
  );
};

export default SwiperSlides;
