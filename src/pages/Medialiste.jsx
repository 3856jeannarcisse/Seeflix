import MediaCard from "./Mediacard";


function MediaList({ title, items = [] }) {

  return (
    <section>

      <h2>{title}</h2>

      <div className="media-1">
        {items.map((item) => (
          <MediaCard key={item.id} movie={item} />
        ))}
      </div>

    </section>
  );
}

export default MediaList;