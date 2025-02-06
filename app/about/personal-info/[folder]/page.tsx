import TypeItComponent from '@/components/TypeItComponent';
import { aboutData } from '../../data';

export async function generateStaticParams() {
  const slugs = await Object.keys(aboutData); // Assume fetchSlugs() fetches your slugs

  console.log(slugs);

  // Return an array of params for each dynamic page to be pre-rendered
  return slugs.map((slug) => ({
    params: { folder: slug },
  }));
}

async function fetchSlugs() {
  return;
}

export default function Page({ params }: { params: { folder: string } }) {
  console.log(params);
  const text: string = aboutData[params.folder];
  return <TypeItComponent text={text}></TypeItComponent>;
}
