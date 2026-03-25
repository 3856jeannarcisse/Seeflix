
import MediaCard from "./Mediacard";
import "../index.css";

function MediaList({ title, items }) {

  return (
    <section>

      <h2>{title}</h2>

      <div className="media-1">
        {items.map((item) => (
          <MediaCard
            key={item.id}
            title={item.title}
            cover={item.cover}
            rating={item.rating}
          />
        ))}
      </div>

    </section>
  );
}

export default MediaList;