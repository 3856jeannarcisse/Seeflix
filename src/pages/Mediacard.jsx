import "./Mediacard.css";

function MediaCard({ movie }) {
  if (!movie) {
    return null;
  }

  return (
    <div className="media-card">
      <img
        className="media-card-image"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3 className="media-card-title">{movie.title}</h3>
      <p className="media-card-date">{movie.release_date}</p>
      <p className="media-card-overview">{movie.overview}</p>
      
    </div>
  );
}

export default MediaCard;