// Detail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const res = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await res.json(); // ← res.json()은 res를 await한 뒤 호출
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  if (!movie) return <h1>디테일 페이지다. (불러오는 중)</h1>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <p>{movie.description_full}</p>
    </div>
  );
}

export default Detail;
