import { Suspense } from "react"
import MovieInfo, { getMovie } from "../../../../components/MovieInfo"
import VideoInfo from "../../../../components/MovieVideo"
import { Metadata } from "next";


type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { id } = await params;

  const movie = await getMovie(id); // ✅ async 함수라 await 필수

  return {
    title: movie.title, // ✅ 문자열만 넣기
  };
}


export default async function MovieDetail({
    params,
}: {
    params : Promise<{ id : string}>
}) {
    const { id } = await params
    return (
        <div>
            <Suspense fallback={<h1>정보 로딩중</h1>}>
              <MovieInfo id={id}/>
            </Suspense>
            <Suspense fallback={<h1>비디오 로딩중</h1>}>
              <VideoInfo id={id}/>
            </Suspense>
            
        </div>
    )
}