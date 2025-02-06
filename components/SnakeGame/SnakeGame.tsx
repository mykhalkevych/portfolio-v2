'use client';
import React, { useState, useEffect, useRef } from 'react';
import './SnakeGame.css';
import Button from '../ui/button/Button';
interface SnakeGameProps {
  onFoodEaten: (snakeLength: number, foodCount: number) => void;
  resetGame: () => void;
  setWin: () => void;
  maxFoodCount: number;
}

export default function SnakeGame({
  maxFoodCount,
  onFoodEaten,
  resetGame,
  setWin,
}: SnakeGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake, setSnake] = useState([
    { x: 10, y: 10 },
    { x: 25, y: 25 },
    { x: 40, y: 40 },
  ]); // Initial snake body
  const [food, setFood] = useState<{ x: number; y: number } | null>(null); // Initial food position
  const [direction, setDirection] = useState({ x: 1, y: 0 }); // Moving right initially
  const [speed, setSpeed] = useState(130); // Snake speed in milliseconds
  const [gameOver, setGameOver] = useState(false);
  const [gameWin, setGameWin] = useState(false);
  const [foodCount, setFoodCount] = useState(0); // Count of food eaten
  const gridSize = 15; // Size of each square in the game grid (15x15 pixels)
  const boardWidth = 16; // 16 squares wide
  const boardHeight = 29; // 29 squares tall
  const [gameStarted, setGameStarted] = useState(false); // Track if game has started

  // Snake gradient color stops
  const initialColor = { r: 67, g: 217, b: 173 }; // Starting color (head)
  const endColor = { r: 8, g: 32, b: 52 }; // Ending color (tail)

  // Helper function to interpolate between two colors
  const interpolateColor = (startColor: any, endColor: any, factor: any) => {
    return {
      r: Math.round(startColor.r + factor * (endColor.r - startColor.r)),
      g: Math.round(startColor.g + factor * (endColor.g - startColor.g)),
      b: Math.round(startColor.b + factor * (endColor.b - startColor.b)),
    };
  };

  // Update the direction based on the key pressed
  const handleKeyDown = (event: { key: any }) => {
    switch (event.key) {
      case 'ArrowUp':
        if (direction.y === 0) setDirection({ x: 0, y: -1 });
        break;
      case 'ArrowDown':
        if (direction.y === 0) setDirection({ x: 0, y: 1 });
        break;
      case 'ArrowLeft':
        if (direction.x === 0) setDirection({ x: -1, y: 0 });
        break;
      case 'ArrowRight':
        if (direction.x === 0) setDirection({ x: 1, y: 0 });
        break;
      default:
        break;
    }
  };

  // Function to move the snake
  const moveSnake = () => {
    if (gameOver) return;

    const newSnake = [...snake];
    const head = { ...newSnake[0] }; // Get current snake's head

    head.x += direction.x;
    head.y += direction.y;

    // Check for wall collisions (simple wrap-around effect)
    if (head.x < 0) head.x = boardWidth - 1;
    if (head.y < 0) head.y = boardHeight - 1;
    if (head.x >= boardWidth) head.x = 0;
    if (head.y >= boardHeight) head.y = 0;

    // Check for snake collision with itself
    if (
      newSnake.some((segment) => segment.x === head.x && segment.y === head.y)
    ) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(head); // Add new head to snake

    // Check if the snake has eaten the food
    if (food && head.x === food.x && head.y === food.y) {
      if (foodCount < maxFoodCount - 1) {
        setFood({
          x: Math.floor(Math.random() * boardWidth),
          y: Math.floor(Math.random() * boardHeight),
        });
      } else {
        setFood(null); // No more food after reaching the maxFoodCount
        setGameOver(true);
        setGameWin(true);
        setWin();
      }
      onFoodEaten(newSnake.length, foodCount + 1);
      setFoodCount(foodCount + 1); // Increment food eaten count
      setSpeed((prev) => prev * 0.95); // Speed up the snake
    } else {
      newSnake.pop(); // Remove the tail if no food eaten
    }

    setSnake(newSnake);
  };

  // Main game loop
  useEffect(() => {
    if (gameStarted && !gameOver) {
      const intervalId = setInterval(moveSnake, speed);
      return () => clearInterval(intervalId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snake, direction, speed, gameStarted, gameOver]);

  // Handle key events for snake movement
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);

  // Draw snake and food on the canvas
  useEffect(() => {
    const context = canvasRef.current?.getContext('2d');
    if (!context) return;
    context.clearRect(0, 0, gridSize * boardWidth, gridSize * boardHeight); // Clear the canvas

    const snakeLength = snake.length;
    let prevEndGradientColor = `rgb(${initialColor.r}, ${initialColor.g}, ${initialColor.b})`;

    // Draw snake with continuous linear gradient
    snake.forEach((segment, index) => {
      // Calculate the gradient factor based on the snake's position
      const factor = index / snakeLength;

      if (index === 0) return; // Skip the head (we'll handle the head differently if needed)

      const prevSegment = snake[index - 1]; // The previous segment
      const currSegment = segment; // Current segment

      // Determine the gradient direction based on the position difference between current and previous segment
      let startX = 0,
        startY = 0,
        endX = 0,
        endY = 0;

      if (prevSegment.x < currSegment.x) {
        // Moving right
        startX = segment.x * gridSize;
        startY = segment.y * gridSize;
        endX = (segment.x + 1) * gridSize;
        endY = segment.y * gridSize;
      } else if (prevSegment.x > currSegment.x) {
        // Moving left
        startX = (segment.x + 1) * gridSize;
        startY = segment.y * gridSize;
        endX = segment.x * gridSize;
        endY = segment.y * gridSize;
      } else if (prevSegment.y < currSegment.y) {
        // Moving down
        startX = segment.x * gridSize;
        startY = segment.y * gridSize;
        endX = segment.x * gridSize;
        endY = (segment.y + 1) * gridSize;
      } else if (prevSegment.y > currSegment.y) {
        // Moving up
        startX = segment.x * gridSize;
        startY = (segment.y + 1) * gridSize;
        endX = segment.x * gridSize;
        endY = segment.y * gridSize;
      }

      // Interpolate color for the current segment
      const segmentColor = interpolateColor(initialColor, endColor, factor);
      const gradientColor = `rgb(${segmentColor.r}, ${segmentColor.g}, ${segmentColor.b})`;

      // Create a gradient for this segment
      const gradient = context.createLinearGradient(startX, startY, endX, endY);

      // Set the gradient for this segment
      gradient.addColorStop(0, prevEndGradientColor); // Start with the end color of the previous segment
      gradient.addColorStop(1, gradientColor); // End with the current segment's color

      // Update the previous end color for the next segment
      prevEndGradientColor = gradientColor;

      // Draw the segment with its gradient
      context.fillStyle = gradient;
      context.fillRect(
        segment.x * gridSize,
        segment.y * gridSize,
        gridSize,
        gridSize
      );
    });

    // Draw food if food count is below maxFoodCount
    if (food && foodCount < maxFoodCount) {
      const foodX = food.x * gridSize + gridSize / 2; // Center of food circle
      const foodY = food.y * gridSize + gridSize / 2;
      const radius = gridSize / 2;

      const gradient = context.createRadialGradient(
        foodX,
        foodY,
        radius * 0.2, // Inner circle of gradient
        foodX,
        foodY,
        radius // Outer circle of gradient
      );

      gradient.addColorStop(0, '#43D9AD');
      gradient.addColorStop(0.3, '#43D9AD');
      gradient.addColorStop(0.5, '#237A6D');
      gradient.addColorStop(0.75, '#237A6D');
      gradient.addColorStop(1, '#124647');

      context.fillStyle = gradient;
      context.beginPath();
      context.arc(foodX, foodY, radius, 0, Math.PI * 2);
      context.fill();
    }
  }, [snake, food, foodCount]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setSnake([
      { x: 10, y: 10 },
      { x: 25, y: 25 },
      { x: 40, y: 40 },
    ]); // Reset snake
    setFood({
      x: Math.floor(Math.random() * boardWidth), // Random x-coordinate within the board width
      y: Math.floor(Math.random() * boardHeight), // Random y-coordinate within the board height
    }); // Reset food
    setDirection({ x: 1, y: 0 }); // Reset direction
    setSpeed(130); // Reset speed
    setFoodCount(0); // Reset food count
    resetGame();
  };

  return (
    <div className='snake-game'>
      {!gameStarted && !gameOver && (
        <div>
          <p className='text'>{"Let's play a game!"}</p>
          <Button variant='secondary' onClick={startGame}>
            start-game
          </Button>
        </div>
      )}

      {gameOver && (
        <div className='game-status'>
          {!gameWin && <span>Game Over!</span>}
          {gameWin && <span>Well done!</span>}
          <Button variant='link' onClick={startGame}>
            start-again
          </Button>
        </div>
      )}
      <canvas
        ref={canvasRef}
        width={gridSize * boardWidth}
        height={gridSize * boardHeight}
      />
    </div>
  );
}
