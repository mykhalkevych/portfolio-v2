'use client';
import TypeIt from 'typeit-react';
import { CodeBlock, dracula } from 'react-code-blocks';

export default function TypeItComponent({ text }: { text: string }) {
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
