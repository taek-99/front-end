import { useEffect } from "react";
import { useParams } from "react-router-dom";



function Detail () {
    const {id} = useParams();
    const getMovie = async () => {
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`).json();};

    useEffect(() => {
        getMovie();
    }, [])

    return (
        <div>
            <h1>디테일 페이지다.</h1>
            
        </div>
    );
}

export default Detail;