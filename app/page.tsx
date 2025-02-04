'use client';
import GameInfo from '@/components/GameInfo/GameInfo';
import SnakeGame from '@/components/SnakeGame/SnakeGame';
import { useState } from 'react';
import { set } from 'react-hook-form';
import TypeIt from 'typeit-react';

export default function Home() {
  const [foodEaten, setEatenFood] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const foodCount = 10;
  const handleFoodEaten = (newSnakeLength: number) => {
    console.log('Snake Length:', newSnakeLength);
    // You can update the state or display it in the parent

    setEatenFood((prev) => prev + 1);
  };

  const resetGame = () => {
    setEatenFood(0);
  };

  const setWin = () => {
    console.log('You win!');
    setIsWin(true);
  };

  return (
    <div className='wrapper'>
      <section>
        <p className='hi-text'>Hi all, I am</p>
        <h1 className='title'>Nazar Mykhalkevych</h1>
        <h2 className='subtitle'>
          &#10095;<TypeIt> Front-end developer</TypeIt>
        </h2>
        <div className='comments-block'>
          <p>{'// complete the game to download CV'}</p>
          <p>{'// you can also see my Github page'}</p>
          <p>
            <span className='primary-text'>const </span>
            <span className='third-text'>githubLink </span> ={' '}
            <a
              className='secondary-text'
              href='https://github.com/mykhalkevych'
            >
              “https://github.com/mykhalkevych”
            </a>
          </p>
        </div>
      </section>
      <section className='game-block'>
        <SnakeGame
          maxFoodCount={foodCount}
          onFoodEaten={handleFoodEaten}
          resetGame={resetGame}
          setWin={setWin}
        ></SnakeGame>
        <GameInfo
          foodCount={foodCount}
          foodEaten={foodEaten}
          isWin={isWin}
        ></GameInfo>
      </section>
    </div>
  );
}
