import { useEffect, useState } from "react";
import { getMoviesByType } from "../Api/Tmdb";
import MediaList from "../Component/MediaList";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import "./Media.css";

const filters = [
  { key: "popular", label: "Popular" },
  { key: "top_rated", label: "Top Rated" },
  { key: "upcoming", label: "Upcoming" },
];

function Media() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [activeFilter, setActiveFilter] = useState("popular");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("name");

  const loadMovies = async (type) => {
    const data = await getMoviesByType(type);
    setMovies(data);
    setFilteredMovies(data);
    setActiveFilter(type);
    setSearchTerm("");
  };

  const handleSearch = () => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      setFilteredMovies(movies);
      return;
    }

    setFilteredMovies(
      movies.filter((movie) => {
        if (searchBy === "date") {
          return movie.release_date?.toLowerCase().includes(query);
        }
        return movie.title?.toLowerCase().includes(query);
      })
    );
  };

  useEffect(() => {
    const fetchInitial = async () => {
      const data = await getMoviesByType("popular");
      setMovies(data);
      setActiveFilter("popular");
    };

    fetchInitial();
  }, []);

  return (
    <>
      <Header
        heroTitle="Browse the Latest Movies"
        heroTagline="Filter by category and discover trending, top rated, and upcoming releases."
        heroButtonText="View Movies"
        heroButtonLink="/media"
        showSocials={false}
        background="/assets/Mediaback1.jpg"
      />

      <main className="media-page">
        <div className="media-topbar">
          <div>
            <p className="media-subtitle">Movie library</p>
            <h1>All Movies</h1>
          </div>

          <div className="filters">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => loadMovies(filter.key)}
                className={activeFilter === filter.key ? "active" : ""}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="media-search">
          <select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
            <option value="name">Search by name</option>
            <option value="date">Search by date</option>
          </select>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={searchBy === "date" ? "Enter release date (YYYY-MM-DD)" : "Search movie titles..."}
          />
          <button type="button" onClick={handleSearch}>
            Search
          </button>
        </div>

        <MediaList
          title={`${filters.find((filter) => filter.key === activeFilter)?.label || "Popular"} Movies`}
          movies={filteredMovies}
        />
      </main>

      <Footer />
    </>
  );
}

export default Media;