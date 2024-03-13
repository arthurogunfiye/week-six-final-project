import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/white-logo.png";
import axios from "axios";

const Movies = () => {
  const { keyword } = useParams();
  const [isLoading, setIsLoading] = useState();
  const [movies, setMovies] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  const navigate = useNavigate();

  const fetchMovies = async keyword => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${
        process.env.REACT_APP_OMDB_API_KEY
      }&s=${keyword || searchKeyword}`
    );
    setIsLoading(false);
    setMovies(data.Search);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = () => {
    fetchMovies(searchKeyword);
  };

  const handleMovieCardClick = movieId => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <>
      <section id="nav-and-header">
        <div className="container">
          <div className="row">
            <nav>
              <Link to="/">
                <img src={logo} alt="Logo" className="white-logo" />
              </Link>
              <ul className="nav__links">
                <Link
                  to="/"
                  className="nav__link link__hover-effect searchResultsPage__nav--link"
                >
                  Home
                </Link>
                <Link
                  to=""
                  className="nav__link link__hover-effect searchResultsPage__nav--link"
                >
                  Find a movie
                </Link>
                <Link
                  to="#"
                  className="nav__link--primary searchResultsPage__nav--link"
                >
                  Contact
                </Link>
              </ul>
            </nav>
            <header>
              <h1 className="header__title">Search for movies</h1>
              <div className="search__wrapper">
                <input
                  type="text"
                  name=""
                  id="searchResultsPage-input"
                  placeholder="Search for a movie"
                  value={searchKeyword}
                  onChange={e => setSearchKeyword(e.target.value)}
                  onKeyDown={event => event.key === "Enter" && handleSearch()}
                />
                <div className="search__icon--wrapper">
                  <svg
                    data-v-390ceb07=""
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-search fa-w-16 search__icon"
                    onClick={() => fetchMovies(searchKeyword)}
                  >
                    <path
                      data-v-390ceb07=""
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      className=""
                    ></path>
                  </svg>
                </div>
              </div>
            </header>
            <div className="overlay"></div>
          </div>
        </div>
      </section>
      <section id="searchResults">
        <div className="container">
          <div className="row">
            <h1 className="searchResultsText">
              <span className="purple">Search Results</span>
            </h1>
            <div className="searchResult--wrapper">
              {isLoading ? (
                <svg
                  data-v-cf78a876=""
                  data-v-2a11e7ca=""
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="spinner"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="svg-inline--fa fa-spinner fa-w-16"
                >
                  <path
                    data-v-cf78a876=""
                    fill="currentColor"
                    d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49
              48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51
              0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0
              229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48
              48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49
              48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
                    className=""
                  ></path>
                </svg>
              ) : (
                movies.slice(0, 6).map(movie => (
                  <>
                    <div
                      onClick={() => handleMovieCardClick(movie.imdbID)}
                      key={movie.imdbID}
                      className="searchResult__card"
                    >
                      <div className="searchResult_img">
                        <img
                          src={movie.Poster}
                          alt={movie.Title}
                          fill
                          width="300"
                          height="444"
                        />
                      </div>
                      <div className="purple">{movie.Title}</div>
                    </div>
                  </>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Movies;
