import { useEffect, useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { getPopularMovies } from "../Api/Tmdb";
import MediaCard from "./Mediacard";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getPopularMovies().then((data) => {
      const popular = data.slice(0, 8); 
      setMovies(popular);
      setFilteredMovies(popular);
    });
  }, []);

  const handleSearch = () => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) {
      setFilteredMovies(movies);
      return;
    }

    setFilteredMovies(
      movies.filter((movie) =>
        movie.title?.toLowerCase().includes(query)
      )
    );
  };

  return (
    <>
      <div className="home-page">
        <Header
          heroTitle="Welcome to our Tize Movies Platform"
          heroTagline="Stream the best movies anytime, anywhere"
          heroButtonText="Explore Movies"
          heroButtonLink="/media"
          showSocials={true}
          background="https://i.pinimg.com/736x/3c/a9/47/3ca947f7c1e4b9f68c8a7e0653b918be.jpg"
        />

        <div className="home-search">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search movies in this list..."
          />
          <button type="button" onClick={handleSearch}>
            Search
          </button>
        </div>

        <h2 id="popular-movies">Popular Movies</h2>

        <div className="movies-grid">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <MediaCard key={movie.id} movie={movie} />
            ))
          ) : (
            <p className="no-results">No movies found. Try another search.</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;