'use client';
import GameInfo from '@/components/GameInfo/GameInfo';
import SnakeGame from '@/components/SnakeGame/SnakeGame';
import TypeIt from 'typeit-react';

export default function Home() {
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
            <a className='secondary-text' href='/'>
              “https://github.com/example/url”
            </a>
          </p>
        </div>
      </section>
      <section className='game-block'>
        <SnakeGame></SnakeGame>
        <GameInfo></GameInfo>
      </section>
    </div>
  );
}
