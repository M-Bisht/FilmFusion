// import axios from "axios";
// import React from "react";
// import options from "./ApiOptions";

// const FetchData = async (page,genere) => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   setLoading(true);
//   try {
//     const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genere}`;
//     const res = await axios.get(url, options);
//     const data = await res.data;
//     setLoading(false);
//     return data.results;
//   } catch (error) {
//     console.log("fetch movie data error", error);
//     setLoading(true);
//   }
// };

// export default FetchData;
