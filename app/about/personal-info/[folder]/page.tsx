'use client';

import { CodeBlock, monokaiSublime } from 'react-code-blocks';
import { aboutData } from '../../data';
export default function Page({ params }: { params: { folder: string } }) {
  console.log(params.folder);
  const text: string = aboutData[params.folder];
  return (
    <CodeBlock
      text={text}
      language={'jsx'}
      theme={monokaiSublime}
      customStyle={{ width: '100%', background: 'transparent' }}
    />
  );
}
