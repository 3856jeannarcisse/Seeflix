
 import "./MediaCard.css";

function MediaCard({ title, cover, rating }) {
  return (
    <div className="media-card">
     
      <img src={cover} alt={title} />
      <h3>{title}</h3>
      <p>⭐ {rating}</p>
    </div>
  );
}
export default MediaCard;


