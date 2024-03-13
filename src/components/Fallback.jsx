function Fallback({ error, resetErrorBoundary }) {
  return (
    <>
      <div role="alert" className="errorMessage">
        <h1>
          <span className="purple">Ooops! Movie not found</span>
        </h1>
        <p>Try updating the URL to a valid movie title</p>
        <p>
          For example:{" "}
          <span className="purple">
            {window.location.origin}/movies/avengers
          </span>
        </p>
      </div>
    </>
  );
}
export default Fallback;
