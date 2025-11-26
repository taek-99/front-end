import { resolve } from "path"
import { API_URL } from "../app/(Home)/page"
import styles from "../styles/movie-videos.module.css"


async function getVideo(id:string) {
    const response = await fetch(`${API_URL}/${id}/videos`,{
    cache: "force-cache",
    })
    return response.json();

}

export default async function VideoInfo({id}:{id:string}) {
    const movie = await getVideo(id)
    return (
        <div className={styles.container}>
            {movie.map((video) => (
                <iframe 
                    key={video.id} 
                    src={`https://youtube.com/embed/${video.key}`} 
                    title={video.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    />
            ))}
        </div>
    )
}