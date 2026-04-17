import MediaCard from "../pages/Mediacard";

function MediaList({ title, movies = [] }) {
  return (
    <section className="media-list-section">
      <h2>{title}</h2>

      <div className="media-1">
        {movies.map((movie) => (
          <MediaCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default MediaList;
