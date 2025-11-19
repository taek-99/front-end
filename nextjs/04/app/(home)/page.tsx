import Link from "next/link";


export const metadata = {
    title :'HOME',
};


export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies(){
    // await new Promise((resolve) => setTimeout(resolve, 100))
    const response = await fetch(API_URL);
    const json = await response.json();
    return json
}

export default async function Home() {
    const movies = await getMovies();
    return (
        <>
        {movies.map(movie => (
            <li key={movie.id}>
                <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>))}
        </>
    );
}




// export default function Home() {
//     const [isloading, setIsLoading] = useState(true);
//     const [movies, setMovies] = useState([]);
//     const getMovies = async () => {
//         const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
//         const json = await response.json();
//         setMovies(json);
//         setIsLoading(false);
//     }

//     useEffect(() => {
//         getMovies();
//     }, []);

//     return (
//         <>
//         {isloading ? '로딩중이다...' : JSON.stringify(movies)} 
//         </>
//     );
// }