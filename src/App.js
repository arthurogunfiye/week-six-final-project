import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/movies/:keyword" element={<Movies />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
