import TypeItComponent from '@/components/TypeItComponent';
import { aboutData } from '../../data';

export function generateStaticParams() {
  const slugs = Object.keys(aboutData);
  return slugs.map((slug) => ({
    folder: slug,
  }));
}

export default function Page({ params }: { params: { folder: string } }) {
  const text: string = aboutData[params.folder];
  return <TypeItComponent text={text}></TypeItComponent>;
}
