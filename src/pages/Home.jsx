import headerImage from "../assets/movie-logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer, toast } from "react-toastify";

const Home = () => {
  const [isLoading, setIsLoading] = useState();
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = async searchKeyword => {
    if (!searchKeyword) {
      toast.error("Please enter a movie");
      return;
    } else {
      setIsLoading(true);
      setTimeout(() => {
        navigate(`/movies/${searchKeyword}`);
      }, 1000);
    }
  };

  return (
    <>
      <Navbar />
      <section id="landing">
        <div className="container">
          <div className="row">
            <div className="landingSection--wrapper">
              <div className="landingSection__description--wrapper">
                <h1 className="landingSection__description--title">
                  UK's most awarded movie search platform
                </h1>
                <h2 className="landingSection__description--sub-title">
                  FIND ANY MOVIE WITH{" "}
                  <span className="purple">
                    <a
                      href="https://www.omdbapi.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="omdbApiLink"
                    >
                      OMDB API
                    </a>
                  </span>
                </h2>
                <div className="landingSection__input-wrapper">
                  <input
                    type="text"
                    name=""
                    id="search__bar1"
                    value={searchKeyword}
                    onChange={e => setSearchKeyword(e.target.value)}
                    onKeyDown={event =>
                      event.key === "Enter" && handleSearch(searchKeyword)
                    }
                    placeholder="Search for a movie"
                  />
                  <input
                    type="text"
                    name=""
                    id="search__bar2"
                    onChange={e => setSearchKeyword(e.target.value)}
                    onKeyDown={event =>
                      event.key === "Enter" && handleSearch(searchKeyword)
                    }
                    placeholder="Search for a movie"
                  />
                  <button
                    data-v-2a11e7ca
                    className="not-loading"
                    id="search__btn"
                    onClick={() => {
                      handleSearch(searchKeyword);
                    }}
                  >
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
                      <svg
                        data-v-2a11e7ca=""
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="search"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-search fa-w-16"
                      >
                        <path
                          data-v-2a11e7ca=""
                          fill="currentColor"
                          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                          className=""
                        ></path>
                      </svg>
                    )}
                  </button>
                  <svg
                    data-v-2a11e7ca=""
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-search fa-w-16 second-search-icon"
                  >
                    <path
                      data-v-2a11e7ca=""
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      className=""
                    ></path>
                  </svg>
                </div>
              </div>
              <div>
                <img
                  src={headerImage}
                  alt="Movie Night"
                  className="movie-logo"
                />
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </section>
    </>
  );
};

export default Home;
