import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import options from "@/app/global/comps/ApiOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Loader from "@/app/global/comps/Loader";

const Carousel = ({ title, path }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const carouselContainerRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  let scroll = 0;

  const carouselContainer = () => {
    return carouselContainerRef.current;
  };

  const nextButton = () => {
    const container = carouselContainer();
    const maxScrollX = container.scrollWidth - container.clientWidth;
    scroll = Math.min(scroll + 260, maxScrollX);
    container.scrollTo({
      left: scroll,
      behavior: "smooth",
    });

    if (scroll > 0) {
      prevButtonRef.current.style.display = "";
    }

    if (scroll >= maxScrollX) {
      nextButtonRef.current.style.display = "none";
    }
  };

  const prevButton = () => {
    const container = carouselContainer();
    const maxScrollX = container.scrollWidth - container.clientWidth;
    scroll = Math.max(scroll - 260, 0);
    container.scrollTo({
      left: scroll,
      behavior: "smooth",
    });

    if (scroll < maxScrollX) {
      nextButtonRef.current.style.display = "";
    }

    if (scroll <= 0) {
      prevButtonRef.current.style.display = "none";
    }
  };

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const url = `https://api.themoviedb.org/3/${path}`;
      const res = await axios.get(url, options);
      const data = await res.data.results;
      setMovies(data);
      setLoading(false);
    } catch (error) {
      console.log("fetch movie error", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchMovies();
    if (scroll <= 0) {
      prevButtonRef.current.style.display = "none";
    }
  }, []);

  return (
    <div className="movieAndSeriesSections">
      <h3>{title}</h3>
      <div className="carouselContainer" ref={carouselContainerRef}>
        {movies.map((movie, index) => {
          return (
            <div key={index} className="carouselDivs">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>
          );
        })}
      </div>
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="leftButton buttons"
        onClick={prevButton}
        ref={prevButtonRef}
      />
      {loading ? null : (
        <FontAwesomeIcon
          icon={faChevronRight}
          className="rightButton buttons"
          onClick={nextButton}
          ref={nextButtonRef}
        />
      )}
      {loading ? <Loader /> : null}
    </div>
  );
};

export default Carousel;
