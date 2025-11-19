import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';

const INITIAL_DIRECTION = { x: 1, y: 0 };
const GAME_SPEED = 150;

interface Position {
  x: number;
  y: number;
}

const GRID_SIZE = 16;

interface SnakeGameProps {
  onScoreChange?: (score: number) => void;
  theatreMode?: boolean;
}

export const SnakeGame = ({ onScoreChange, theatreMode = false }: SnakeGameProps) => {
  const gridSize = GRID_SIZE;
  const maxWidth = theatreMode ? 'max-w-xl' : 'max-w-md';
  const initialSnake = useMemo(() => [{ x: Math.floor(gridSize / 2), y: Math.floor(gridSize / 2) }], [gridSize]);
  const initialFood = useMemo(() => ({ x: Math.floor(gridSize / 3), y: Math.floor(gridSize / 3) }), [gridSize]);
  
  const [snake, setSnake] = useState<Position[]>(initialSnake);
  const [food, setFood] = useState<Position>(initialFood);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const directionRef = useRef<Position>(INITIAL_DIRECTION);
  const gameLoopRef = useRef<number | undefined>(undefined);

  const generateFood = useCallback((): Position => {
    return {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };
  }, [gridSize]);

  const resetGame = useCallback(() => {
    setSnake(initialSnake);
    setFood(initialFood);
    directionRef.current = INITIAL_DIRECTION;
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
    onScoreChange?.(0);
  }, [onScoreChange, initialSnake, initialFood]);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (gameOver) {
      if (e.key === ' ' || e.key === 'Enter') {
        resetGame();
      }
      return;
    }

    if (e.key === ' ') {
      setIsPaused(prev => !prev);
      return;
    }

    const keyMap: Record<string, Position> = {
      ArrowUp: { x: 0, y: -1 },
      ArrowDown: { x: 0, y: 1 },
      ArrowLeft: { x: -1, y: 0 },
      ArrowRight: { x: 1, y: 0 },
      w: { x: 0, y: -1 },
      s: { x: 0, y: 1 },
      a: { x: -1, y: 0 },
      d: { x: 1, y: 0 },
    };

    const newDirection = keyMap[e.key];
    if (newDirection) {
      // Prevent reversing into itself
      if (
        newDirection.x !== -directionRef.current.x &&
        newDirection.y !== -directionRef.current.y
      ) {
        directionRef.current = newDirection;
      }
    }
  }, [gameOver, resetGame]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    if (gameOver || isPaused) return;

    const gameLoop = () => {
      setSnake(prevSnake => {
        const head = prevSnake[0];
        const newHead: Position = {
          x: head.x + directionRef.current.x,
          y: head.y + directionRef.current.y,
        };

        // Check wall collision
        if (
          newHead.x < 0 ||
          newHead.x >= gridSize ||
          newHead.y < 0 ||
          newHead.y >= gridSize
        ) {
          setGameOver(true);
          return prevSnake;
        }

        // Check self collision
        if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          const newScore = score + 1;
          setScore(newScore);
          onScoreChange?.(newScore);
          setFood(generateFood());
          return newSnake;
        }

        // Remove tail
        return newSnake.slice(0, -1);
      });
    };

      gameLoopRef.current = window.setInterval(gameLoop, GAME_SPEED);
      return () => {
        if (gameLoopRef.current) {
          clearInterval(gameLoopRef.current);
        }
      };
    }, [food, gameOver, isPaused, score, generateFood, onScoreChange, gridSize]);

  const renderCell = (x: number, y: number) => {
    const isSnakeHead = snake[0]?.x === x && snake[0]?.y === y;
    const isSnakeBody = snake.slice(1).some(segment => segment.x === x && segment.y === y);
    const isFood = food.x === x && food.y === y;

    let cellClass = 'w-full h-full border border-terminal-border/30';
    if (isSnakeHead) {
      cellClass += ' bg-terminal-accent';
    } else if (isSnakeBody) {
      cellClass += ' bg-terminal-success';
    } else if (isFood) {
      cellClass += ' bg-terminal-warning';
    } else {
      cellClass += ' bg-terminal-surface';
    }

    return <div key={`${x}-${y}`} className={cellClass} />;
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center justify-between w-full">
        <div className="text-terminal-text font-mono text-sm">
          <span className="terminal-prompt">&gt;</span> Score: <span className="terminal-success">{score}</span>
        </div>
        {isPaused && (
          <div className="text-terminal-warning font-mono text-sm">
            <span className="terminal-prompt">&gt;</span> PAUSED
          </div>
        )}
      </div>

      <div 
        className={`gap-0 w-full ${maxWidth} aspect-square border-2 border-terminal-border rounded p-2 bg-terminal-bg`}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: gridSize * gridSize }, (_, i) => {
          const x = i % gridSize;
          const y = Math.floor(i / gridSize);
          return renderCell(x, y);
        })}
      </div>

      {gameOver && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="text-terminal-error font-mono mb-2">
            <span className="terminal-prompt">&gt;</span> Game Over!
          </div>
          <div className="text-terminal-text font-mono text-sm">
            Press <span className="terminal-accent">SPACE</span> or <span className="terminal-accent">ENTER</span> to restart
          </div>
        </motion.div>
      )}

      {!gameOver && (
        <div className="text-terminal-text/70 font-mono text-xs text-center">
          <div>
            <span className="terminal-prompt">&gt;</span> Use <span className="terminal-accent">Arrow Keys</span> or <span className="terminal-accent">WASD</span> to move
          </div>
          <div>
            <span className="terminal-prompt">&gt;</span> Press <span className="terminal-accent">SPACE</span> to pause
          </div>
        </div>
      )}
    </div>
  );
};

