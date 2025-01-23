'use client';

import { CodeBlock, dracula } from 'react-code-blocks';

interface Props {
  name: string;
  email: string;
  message: string;
}
export default function FormValueExample({ name, email, message }: Props) {
  const text = `const button = document.querySelector('#sendBtn');

     const message = {
    name: "${name}",
    email: "${email}",
    message: "${message}", 
  }
  
  button.addEventListener('click', () => {
    form.send(message);
  })`;

  return (
    <div className='form-value-example'>
      <CodeBlock
        text={text}
        language={'jsx'}
        theme={dracula}
        customStyle={{
          width: '100%',
          background: 'transparent',
          fontFamily: 'cursive',
        }}
      />
    </div>
  );
}
