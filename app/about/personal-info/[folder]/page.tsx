'use client';

import { CodeBlock, dracula } from 'react-code-blocks';
import { aboutData } from '../../data';
import TypeIt from 'typeit-react';

export async function generateStaticParams() {
  // Fetch or generate a list of dynamic params (e.g., slugs or ids)
  const slugs = await fetchSlugs(); // Assume fetchSlugs() fetches your slugs

  // Return an array of params for each dynamic page to be pre-rendered
  return slugs.map((slug) => ({
    params: { folder: slug },
  }));
}

async function fetchSlugs() {
  return Object.keys(aboutData);
}

export default function Page({ params }: { params: { folder: string } }) {
  const text: string = aboutData[params.folder];

  return (
    <TypeIt options={{ speed: 2 }}>
      <CodeBlock
        text={text}
        language={'jsx'}
        theme={dracula}
        customStyle={{
          width: '100%',
          background: 'transparent',
        }}
      />
    </TypeIt>
  );
}
