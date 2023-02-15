import "./App.css";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="card-container">
        {MovieList.map((movie) => {
          return (
            <MovieCard
              name={movie.Title}
              year={movie.Year}
              img={movie.Poster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
