export default function Page({ params }: { params: { folder: string } }) {
  return <div>My Post: {params.folder}</div>;
}
