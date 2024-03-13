import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import MovieDetailsTable from "../components/Table";

const MovieDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState();
  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${id}&plot=full`
    );
    setIsLoading(false);
    setMovie(data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div className="row">
            <div className="movieDetailsWrapper">
              <h1 className="movieDetailsPageTitle">Movie Details</h1>
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
                <>
                  <div className="movieDetailsPoster">
                    <img src={movie.Poster} alt="Movie poster" />
                  </div>
                  <div className="movieDetails">
                    <MovieDetailsTable header="Title" body={movie.Title} />
                    <MovieDetailsTable
                      header="Main Actors"
                      body={movie.Actors}
                    />
                    <MovieDetailsTable header="Type" body={movie.Type} />
                    <MovieDetailsTable header="Plot" body={movie.Plot} />
                    <MovieDetailsTable header="Duration" body={movie.Runtime} />
                    <MovieDetailsTable
                      header="Released"
                      body={movie.Released}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieDetails;
