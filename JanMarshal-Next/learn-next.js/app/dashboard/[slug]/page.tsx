type Params = Promise<{ params: { slug: string } }>;



export default async function Dashboard({ params }: { params: { slug: string } }) {
  const { slug } =  await params;
  return <h1>Hello World from slug route: {slug}</h1>;
}