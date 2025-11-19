import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

type Board = number[][];

interface Game2048Props {
  onScoreChange?: (score: number) => void;
  theatreMode?: boolean;
}

const BOARD_SIZE = 4;

const initializeBoard = (): Board => {
  const board: Board = Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(0));
  addRandomTile(board);
  addRandomTile(board);
  return board;
};

const addRandomTile = (board: Board): void => {
  const emptyCells: [number, number][] = [];
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (board[i][j] === 0) {
        emptyCells.push([i, j]);
      }
    }
  }
  
  if (emptyCells.length > 0) {
    const [row, col] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    board[row][col] = Math.random() < 0.9 ? 2 : 4;
  }
};

const moveLeft = (board: Board): { newBoard: Board; moved: boolean; score: number } => {
  const newBoard = board.map(row => [...row]);
  let moved = false;
  let score = 0;

  for (let i = 0; i < BOARD_SIZE; i++) {
    const row = newBoard[i].filter(val => val !== 0);
    const newRow: number[] = [];
    
    for (let j = 0; j < row.length; j++) {
      if (j < row.length - 1 && row[j] === row[j + 1]) {
        const merged = row[j] * 2;
        newRow.push(merged);
        score += merged;
        j++;
        moved = true;
      } else {
        newRow.push(row[j]);
      }
    }
    
    while (newRow.length < BOARD_SIZE) {
      newRow.push(0);
    }
    
    if (JSON.stringify(newRow) !== JSON.stringify(newBoard[i])) {
      moved = true;
    }
    
    newBoard[i] = newRow;
  }

  return { newBoard, moved, score };
};

const rotateBoard = (board: Board, times: number): Board => {
  let rotated = board.map(row => [...row]);
  for (let t = 0; t < times; t++) {
    rotated = rotated[0].map((_, i) => rotated.map(row => row[i]).reverse());
  }
  return rotated;
};

const move = (board: Board, direction: 'up' | 'down' | 'left' | 'right'): { newBoard: Board; moved: boolean; score: number } => {
  let rotated = board;
  let rotations = 0;

  if (direction === 'right') {
    rotated = rotateBoard(board, 2);
    rotations = 2;
  } else if (direction === 'up') {
    rotated = rotateBoard(board, 3);
    rotations = 1;
  } else if (direction === 'down') {
    rotated = rotateBoard(board, 1);
    rotations = 3;
  }

  const result = moveLeft(rotated);

  if (result.moved) {
    addRandomTile(result.newBoard);
  }

  return {
    newBoard: rotateBoard(result.newBoard, rotations),
    moved: result.moved,
    score: result.score,
  };
};

const canMove = (board: Board): boolean => {
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (board[i][j] === 0) return true;
      if (i < BOARD_SIZE - 1 && board[i][j] === board[i + 1][j]) return true;
      if (j < BOARD_SIZE - 1 && board[i][j] === board[i][j + 1]) return true;
    }
  }
  return false;
};

const hasWon = (board: Board): boolean => {
  return board.some(row => row.some(cell => cell === 2048));
};

export const Game2048 = ({ onScoreChange, theatreMode = false }: Game2048Props) => {
  const [board, setBoard] = useState<Board>(initializeBoard);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  const resetGame = useCallback(() => {
    setBoard(initializeBoard());
    setScore(0);
    setGameOver(false);
    setWon(false);
    onScoreChange?.(0);
  }, [onScoreChange]);

  const handleMove = useCallback((direction: 'up' | 'down' | 'left' | 'right') => {
    if (gameOver) return;

    const result = move(board, direction);
    
    if (result.moved) {
      setBoard(result.newBoard);
      const newScore = score + result.score;
      setScore(newScore);
      onScoreChange?.(newScore);

      if (!won && hasWon(result.newBoard)) {
        setWon(true);
      }

      if (!canMove(result.newBoard)) {
        setGameOver(true);
      }
    }
  }, [board, score, gameOver, won, onScoreChange]);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (gameOver && e.key === ' ') {
      resetGame();
      return;
    }

    const keyMap: Record<string, 'up' | 'down' | 'left' | 'right'> = {
      ArrowUp: 'up',
      ArrowDown: 'down',
      ArrowLeft: 'left',
      ArrowRight: 'right',
      w: 'up',
      s: 'down',
      a: 'left',
      d: 'right',
    };

    const direction = keyMap[e.key];
    if (direction) {
      e.preventDefault();
      handleMove(direction);
    }
  }, [handleMove, gameOver, resetGame]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const getTileColor = (value: number): string => {
    const colors: Record<number, string> = {
      2: 'bg-terminal-surface text-terminal-text',
      4: 'bg-terminal-surface/90 text-terminal-text',
      8: 'bg-terminal-warning/20 text-terminal-warning',
      16: 'bg-terminal-warning/40 text-terminal-warning',
      32: 'bg-terminal-warning/60 text-terminal-warning',
      64: 'bg-terminal-warning text-white',
      128: 'bg-terminal-accent/60 text-white',
      256: 'bg-terminal-accent/80 text-white',
      512: 'bg-terminal-accent text-white',
      1024: 'bg-terminal-success/80 text-white',
      2048: 'bg-terminal-success text-white glow-effect',
    };
    return colors[value] || 'bg-terminal-bg text-terminal-text';
  };

  const maxWidth = theatreMode ? 'max-w-2xl' : 'max-w-md';
  const cellSize = theatreMode ? 'h-20 md:h-24' : 'h-16';
  const textSize = theatreMode ? 'text-2xl md:text-3xl' : 'text-xl';

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex items-center justify-between w-full">
        <div className="text-terminal-text font-mono text-sm">
          <span className="terminal-prompt">&gt;</span> Score: <span className="terminal-success">{score}</span>
        </div>
        <motion.button
          onClick={resetGame}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-terminal-surface border border-terminal-border rounded font-mono text-sm hover:bg-terminal-accent hover:text-white transition-colors"
        >
          <span className="terminal-prompt">&gt;</span> New Game
        </motion.button>
      </div>

      <div className={`grid grid-cols-4 gap-2 w-full ${maxWidth} aspect-square`}>
        {board.map((row, i) =>
          row.map((cell, j) => (
            <motion.div
              key={`${i}-${j}`}
              initial={{ scale: 0.8 }}
              animate={{ scale: cell ? 1 : 0.8 }}
              className={`${cellSize} ${getTileColor(cell)} border border-terminal-border rounded flex items-center justify-center font-bold ${textSize} font-mono`}
            >
              {cell !== 0 && cell}
            </motion.div>
          ))
        )}
      </div>

      {won && !gameOver && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-terminal-success font-mono text-lg"
        >
          <span className="terminal-prompt">&gt;</span> You reached 2048! Keep going?
        </motion.div>
      )}

      {gameOver && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="text-terminal-error font-mono text-lg mb-2">
            <span className="terminal-prompt">&gt;</span> Game Over!
          </div>
          <div className="text-terminal-text font-mono text-sm">
            Press <span className="terminal-accent">SPACE</span> to restart
          </div>
        </motion.div>
      )}

      {!gameOver && (
        <div className="text-terminal-text/70 font-mono text-xs text-center">
          <div>
            <span className="terminal-prompt">&gt;</span> Use <span className="terminal-accent">Arrow Keys</span> or <span className="terminal-accent">WASD</span> to move
          </div>
          <div>
            <span className="terminal-prompt">&gt;</span> Combine tiles to reach <span className="terminal-success">2048</span>!
          </div>
        </div>
      )}
    </div>
  );
};

