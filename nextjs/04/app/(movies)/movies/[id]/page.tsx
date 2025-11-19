import { resolve } from "path";
import { API_URL } from "../../../(home)/page";



async function getMovie(id:string) {
    // await new Promise((resolve) => setTimeout(resolve, 5000))
    const response = await fetch(`${API_URL}/${id}`)
    return response.json()
}

async function getVideos(id:string) {
    const response = await fetch(`${API_URL}/${id}/videos`)
    return response.json();
}


export default async function MovieDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])

  return (
    <>
    <h1>{movie.title}</h1>
    </>
  )
}
