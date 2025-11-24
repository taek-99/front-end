import Link from "next/link";




export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies() {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json
}



export default async function Home() {
    const movies = await getMovies();
    return (
        <>
        <h1>home</h1>
        {movies.map(movie => (
            <li key={movie.id}>
                <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
        ))}
        </>
    );
}