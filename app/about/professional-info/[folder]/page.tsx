'use client';

import { CodeBlock, dracula } from 'react-code-blocks';
import { aboutData } from '../../data';
import TypeIt from 'typeit-react';
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
