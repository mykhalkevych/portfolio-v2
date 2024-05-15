export default function Page({ params }: { params: { folder: string } }) {
  return <div>hobbies{params.folder}</div>;
}
