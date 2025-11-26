import Movies from "../../components/Movies"
import styles from "../../styles/home.module.css"

export const metadata = {
    title : "Home",
}


export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"


async function getMovies () {
    const res = await fetch(API_URL)
    const json = await res.json()
    return json
}

export default async function Home () {
    const movies = await getMovies()

    return (
        <div>
        <h1 className={styles.home}>Home</h1>
        <div className={styles.container}>

            {movies.map(movie => (
                <Movies
                    key = {movie.id}
                    id = {movie.id}
                    poster_path = {movie.poster_path}
                    title = {movie.title}
                />
            ))}
        </div>
        </div>
    );
}