import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";


export default async function MovieDetail({
    params,
}: {
    params: Promise<{ id: string }>; 
}) {
    const { id } = await params;       // ← 여기서 진짜 id 꺼냄

    return (
        <>
        <Suspense fallback={<h1> 정보 로딩중</h1>}>
            <MovieInfo id={id}/>
        </Suspense>
        <Suspense fallback={<h1> 영상 로딩중</h1>}>
            <MovieVideos id={id}/>
        </Suspense>
        </>
    );
}