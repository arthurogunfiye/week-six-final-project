import { useEffect, useState } from "react";
import logo from "../assets/purple-logo.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${id}&plot=full`
    );
    setMovie(data);
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  return (
    <>
      <section id="nav">
        <div className="container">
          <div className="row">
            <nav>
              <Link to="/">
                <img src={logo} alt="Logo" className="purple-logo" />
              </Link>
              <Link
                to="/"
                className="nav__link--homePage nav__link--homePage-active link__hover-effect"
              >
                Home
              </Link>
              <Link
                to="/movies"
                className="nav__link--homePage link__hover-effect"
              >
                Find a movie
              </Link>
              <ul className="nav__links">
                <Link href="#" className="nav__link--primary-homePage">
                  Contact
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <h1 className="movieDetailsPageTitle">Movie Details</h1>
            <div className="movieDetailsWrapper">
              <div className="movieDetailsPoster">
                <img src={movie.Poster} alt="Movie poster" />
              </div>
              <div className="movieDetails">
                <p>Title: {movie.Title}</p>
                <p>Main Actors: {movie.Actors}</p>
                <p>Type: {movie.Type}</p>
                <p>Plot: {movie.Plot}</p>
                <p>Duration: {movie.Runtime}</p>
                <p>Released: {movie.Released}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieDetails;
