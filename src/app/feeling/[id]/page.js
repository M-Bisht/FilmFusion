"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "@/app/global/sections/Header";
import axios from "axios";
import options from "@/app/global/comps/ApiOptions";
import Loader from "@/app/global/comps/Loader";

const page = ({ params }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  let genere;
  let page = 1;
  let totalPages;

  // Fetching movie data only
  const fetchMovieData = async () => {
    setLoading(true);
    try {
      const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genere}`;
      const res = await axios.get(url, options);
      const data = await res.data;
      totalPages = data.total_pages;
      setLoading(false);
      return data.results;
    } catch (error) {
      console.log("fetch movie data error", error);
      setLoading(true);
    }
  };

  // filtering data that have posters
  const getPoster = (data) => {
    return data.filter((data) => {
      return data.poster_path;
    });
  };

  // showing fetched movies
  const showMovies = async () => {
    const movieData = await fetchMovieData();
    const hasImage = await getPoster(movieData);
    setMovies(hasImage);
  };

  if (params.id === "happy") {
    genere = "28%2C12%2C16";
  }
  if (params.id === "sad") {
  }
  if (params.id === "romantic") {
    genere = "14%2C10749";
  }
  if (params.id === "angry") {
    genere = "35";
  }

  // console.log(totalPages);
  const windowScroll = (e) => {
    const scrollElm = e.target.scrollingElement;
    let scroll = scrollElm.scrollTop + scrollElm.clientHeight;
    if (scroll >= scrollElm.scrollHeight - 1 && page != totalPages) {
      ++page;
      const moreMovie = async () => {
        const movieData = await fetchMovieData();
        const hasImage = await getPoster(movieData);
        setMovies((prev) => {
          return [...prev, ...hasImage];
        });
      };
      moreMovie();
    }
  };

  useEffect(() => {
    showMovies();
    window.addEventListener("scroll", windowScroll);
    return () => window.removeEventListener("scroll", windowScroll);
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="movieContainer">
        {movies.map((movie, index) => {
          return (
            <div key={index} className="movieDivs">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          );
        })}
      </div>
      {loading ? <Loader /> : null}
    </div>
  );
};

export default page;
