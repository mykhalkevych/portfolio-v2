import React, { useState, useEffect } from 'react';
import './GameInfo.css';
import Button from '../ui/button/Button';
interface GameInfoProps {
  foodCount: number;
  foodEaten: number;
  isWin: boolean;
}

export default function GameInfo({
  foodCount,
  foodEaten,
  isWin,
}: GameInfoProps) {
  const [food, setFood] = useState();
  const isFoodEaten = (index: number) => {
    if (foodCount - foodEaten <= index) {
      return 'eaten';
    }
    return '';
  };

  const handleDownload = () => {
    const fileUrl = '/files/CV_Nazar_Mykhalkevych_Frontend_Developer.pdf'; // Relative path to the PDF file

    // Create an anchor element and trigger the download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute(
      'download',
      'CV_Nazar_Mykhalkevych_Frontend_Developer.pdf'
    ); // Specify the name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up after download
  };

  return (
    <div className='game-info'>
      <div className='game-rules'>
        <div className='comments'>
          {'// use keyboard'}
          <br />
          {'// arrows to play'}
        </div>
        <div className='controls'>
          <div className='arrow arrow-left'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='50'
              height='30'
              viewBox='0 0 50 30'
              fill='none'
            >
              <rect
                x='49.0786'
                y='28.9637'
                width='48.0787'
                height='27.6912'
                rx='7.5'
                transform='rotate(-180 49.0786 28.9637)'
                fill='#010C15'
                stroke='#1E2D3D'
              />
              <path
                d='M22.0391 15.1181L28.0391 10.8681L28.0391 19.3681L22.0391 15.1181Z'
                fill='white'
              />
            </svg>
          </div>
          <div className='arrow arrow-top'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='51'
              height='29'
              viewBox='0 0 51 29'
              fill='none'
            >
              <rect
                x='1.46094'
                y='0.772522'
                width='48.0787'
                height='27.6912'
                rx='7.5'
                fill='#010C15'
                stroke='#1E2D3D'
              />
              <path
                d='M25.5 11.6181L29.75 17.6181H21.25L25.5 11.6181Z'
                fill='white'
              />
            </svg>
          </div>
          <div className='arrow arrow-bottom'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='51'
              height='30'
              viewBox='0 0 51 30'
              fill='none'
            >
              <rect
                x='49.5391'
                y='28.9637'
                width='48.0787'
                height='27.6912'
                rx='7.5'
                transform='rotate(-180 49.5391 28.9637)'
                fill='#010C15'
                stroke='#1E2D3D'
              />
              <path
                d='M25.5 18.1181L21.25 12.1181L29.75 12.1181L25.5 18.1181Z'
                fill='white'
              />
            </svg>
          </div>
          <div className='arrow arrow-right'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='50'
              height='30'
              viewBox='0 0 50 30'
              fill='none'
            >
              <rect
                x='49'
                y='28.9637'
                width='48.0787'
                height='27.6912'
                rx='7.5'
                transform='rotate(-180 49 28.9637)'
                fill='#010C15'
                stroke='#1E2D3D'
              />
              <path
                d='M27.9604 15.1181L21.9604 19.3681L21.9604 10.8681L27.9604 15.1181Z'
                fill='white'
              />
            </svg>
          </div>
        </div>
      </div>
      <div className='food-block'>
        <div className='comments'> {'// food left'}</div>
        <div className='foods'>
          {[...Array(foodCount)].map((_, index) => (
            <div
              key={index}
              className={'food-item ' + isFoodEaten(index)}
            ></div>
          ))}
        </div>
      </div>
      <div className='buttons'>
        <Button
          disabled={!isWin}
          style={{ width: '120px' }}
          animate={isWin}
          variant='primary'
          onClick={handleDownload}
        >
          Download CV
        </Button>
      </div>
    </div>
  );
}
