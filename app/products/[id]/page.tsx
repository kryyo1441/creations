export default async function Products({params, }: {params:Promise<{ id: string }>;}) {
    const { id } = await params;
  return (
    <h1>product {id}</h1>
  );
}