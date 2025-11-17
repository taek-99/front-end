export default async function MovieDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params

  return <h1>MOVIE {id}</h1>
}
