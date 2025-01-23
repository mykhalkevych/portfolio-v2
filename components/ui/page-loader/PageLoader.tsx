'use client';

import { Audio } from 'react-loader-spinner';
export default function PageLoader() {
  return (
    <div>
      <Audio height='80' width='80' color='green' ariaLabel='loading' />
    </div>
  );
}
