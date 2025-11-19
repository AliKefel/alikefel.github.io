import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

type Player = 'X' | 'O' | null;
type Board = Player[];

interface TicTacToeProps {
  onScoreChange?: (score: number) => void;
  theatreMode?: boolean;
}

const calculateWinner = (squares: Board): Player => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export const TicTacToe = ({ onScoreChange, theatreMode = false }: TicTacToeProps) => {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(square => square !== null);

  const handleClick = useCallback((index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const newWinner = calculateWinner(newBoard);
    if (newWinner === 'X') {
      const newScore = xScore + 1;
      setXScore(newScore);
      onScoreChange?.(newScore);
    } else if (newWinner === 'O') {
      setOScore(oScore + 1);
    }
  }, [board, isXNext, winner, xScore, oScore, onScoreChange]);

  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }, []);

  const resetScores = useCallback(() => {
    setXScore(0);
    setOScore(0);
    onScoreChange?.(0);
  }, [onScoreChange]);

  const maxWidth = theatreMode ? 'max-w-2xl' : 'max-w-md';
  const cellSize = theatreMode ? 'h-24 md:h-32' : 'h-20';

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex items-center justify-between w-full">
        <div className="text-terminal-text font-mono text-sm">
          <span className="terminal-prompt">&gt;</span> X: <span className="terminal-accent">{xScore}</span> | O: <span className="terminal-success">{oScore}</span>
        </div>
        {(winner || isDraw) && (
          <motion.button
            onClick={resetGame}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-terminal-accent text-white rounded font-mono text-sm hover:bg-terminal-accent/80 transition-colors"
          >
            <span className="terminal-prompt">&gt;</span> New Game
          </motion.button>
        )}
      </div>

      <div className={`grid grid-cols-3 gap-2 w-full ${maxWidth} aspect-square`}>
        {board.map((square, index) => (
          <motion.button
            key={index}
            onClick={() => handleClick(index)}
            disabled={!!square || !!winner || isDraw}
            whileHover={!square && !winner && !isDraw ? { scale: 1.05 } : {}}
            whileTap={!square && !winner && !isDraw ? { scale: 0.95 } : {}}
            className={`${cellSize} bg-terminal-surface border-2 border-terminal-border rounded font-mono text-3xl md:text-4xl font-bold transition-colors ${
              square === 'X'
                ? 'text-terminal-accent'
                : square === 'O'
                ? 'text-terminal-success'
                : 'text-terminal-text/30 hover:bg-terminal-surface/80 hover:border-terminal-accent'
            } ${winner || isDraw ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {square}
          </motion.button>
        ))}
      </div>

      {(winner || isDraw) && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className={`font-mono text-xl mb-2 ${winner === 'X' ? 'text-terminal-accent' : 'text-terminal-success'}`}>
            <span className="terminal-prompt">&gt;</span>{' '}
            {winner ? `${winner} Wins!` : "It's a Draw!"}
          </div>
        </motion.div>
      )}

      {!winner && !isDraw && (
        <div className="text-terminal-text font-mono text-sm">
          <span className="terminal-prompt">&gt;</span> Player <span className={isXNext ? 'text-terminal-accent' : 'text-terminal-success'}>{isXNext ? 'X' : 'O'}</span>'s turn
        </div>
      )}

      <div className="flex gap-2">
        <motion.button
          onClick={resetScores}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-terminal-surface border border-terminal-border rounded font-mono text-xs hover:bg-terminal-surface/80 transition-colors"
        >
          <span className="terminal-prompt">&gt;</span> Reset Scores
        </motion.button>
      </div>
    </div>
  );
};

