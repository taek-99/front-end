import { API_URL } from "../app/(home)/page";



async function getVideos(id:string) {
    const response = await fetch(`${API_URL}/${id}`,{
    cache: "force-cache",
    })
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return response.json();
}

export default async function MovieVideos({id}:{id:string}) {
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>
}