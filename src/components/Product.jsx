const ImageCard = ({ albumId, title, url }) => {
  return (
    <ul>
      <li>
        <h3>{albumId}</h3>
        <p
          style={{
            margin: 8,
            padding: "12px 16px",
            borderRadius: 4,
            backgroundColor: "gray",
            color: "white",
          }}
        >
          {title}
        </p>
        <img src={url} alt={albumId} />
      </li>
    </ul>
  );
};

export default ImageCard;
