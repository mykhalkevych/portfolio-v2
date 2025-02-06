import TypeItComponent from '@/components/TypeItComponent';
import { aboutData } from '../../data';

export async function generateStaticParams() {
  const slugs = await fetchSlugs(); // Assume fetchSlugs() fetches your slugs

  // Return an array of params for each dynamic page to be pre-rendered
  return slugs.map((slug) => ({
    params: { folder: slug },
  }));
}

async function fetchSlugs() {
  return await Object.keys(aboutData);
}

export default function Page({ params }: { params: { folder: string } }) {
  console.log(params);
  const text: string = aboutData[params.folder];
  return <TypeItComponent text={text}></TypeItComponent>;
}
