import { useState, useEffect } from "react";
import Movie from "../components/movie";


function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
    const json = await (
        await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
    )).json();
    setMovies(json.data.movies);
    setLoading(false);
    };

    useEffect(() => {
    getMovies();
    },[])

    return (
    <div>
        <h1>영화 보여줌</h1>
        {loading ? <h1>Loading...</h1>: 
        <div>{movies.map(movie => 
        <Movie
            key={movie.id}
            coverImg={movie.medium_cover_image} 
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            id={movie.id}
            />)}</div>}

    </div>
  );
}

export default Home