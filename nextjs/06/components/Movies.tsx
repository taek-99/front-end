"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../styles/movie.module.css"

interface IMovieProps{
    title: string;
    id: string;
    poster_path: string
}



export default function Movies({id, poster_path, title} : IMovieProps) {
    const router = useRouter();
    const onClick = () => {
     router.push(`movie/${id}`);
    }

    return (
        <div className={styles.movie}>
            <img src={poster_path} alt={title} onClick={onClick}/>
            <Link href={`/movie/${id}`}>{title}</Link>
        </div>
    )
}