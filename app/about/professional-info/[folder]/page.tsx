export default function Page({ params }: { params: { folder: string } }) {
  return <div>professional{params.folder}</div>;
}
