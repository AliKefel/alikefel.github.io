import { useState, useRef, useEffect, useCallback } from 'react';
import { Section } from '../ui/Section';
import { GameCard } from '../games/GameCard';
import { TheatreModal } from '../games/TheatreModal';
import { SnakeGame } from '../games/SnakeGame';
import { TicTacToe } from '../games/TicTacToe';
import { Game2048 } from '../games/Game2048';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Game {
  id: string;
  title: string;
  description: string | undefined;
  cardComponent: React.ReactNode;
  theatreComponent: React.ReactNode;
}

const games: Game[] = [
  {
    id: 'snake',
    title: 'Snake',
    description: 'Classic snake game. Eat food to grow and avoid hitting walls or yourself!',
    cardComponent: <SnakeGame />,
    theatreComponent: <SnakeGame theatreMode />,
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe',
    description: 'Classic 3x3 grid game. Get three in a row to win!',
    cardComponent: <TicTacToe />,
    theatreComponent: <TicTacToe theatreMode />,
  },
  {
    id: '2048',
    title: '2048',
    description: 'Slide tiles to combine numbers and reach 2048!',
    cardComponent: <Game2048 />,
    theatreComponent: <Game2048 theatreMode />,
  },
];

export const MiniGames = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const updateScrollButtons = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 320; // card width + gap
    const newPosition = direction === 'left' 
      ? scrollPosition - scrollAmount 
      : scrollPosition + scrollAmount;
    const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
    const clampedPosition = Math.max(0, Math.min(newPosition, maxScroll));
    setScrollPosition(clampedPosition);
    scrollContainerRef.current.scrollTo({ left: clampedPosition, behavior: 'smooth' });
    setTimeout(updateScrollButtons, 100);
  };

  useEffect(() => {
    // Update scroll buttons after component mounts and games are rendered
    const timer = setTimeout(updateScrollButtons, 100);
    window.addEventListener('resize', updateScrollButtons);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [updateScrollButtons]);

  return (
    <Section id="mini-games" title="Mini Games">
      <div className="text-terminal-prompt text-lg font-mono mb-6">
        <span className="terminal-success">$</span> ls -la games/
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Scroll buttons */}
        {games.length > 1 && (
          <>
            {canScrollLeft && (
              <motion.button
                onClick={() => scroll('left')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-terminal-surface border border-terminal-border rounded-full p-2 hover:bg-terminal-accent hover:text-white transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
            )}
            {canScrollRight && (
              <motion.button
                onClick={() => scroll('right')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-terminal-surface border border-terminal-border rounded-full p-2 hover:bg-terminal-accent hover:text-white transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            )}
          </>
        )}

        {/* Horizontal scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto overflow-y-visible scrollbar-hide py-4 px-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          onScroll={(e) => {
            setScrollPosition(e.currentTarget.scrollLeft);
            updateScrollButtons();
          }}
        >
          {games.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              description={game.description || ''}
              onClick={() => setSelectedGame(game)}
            >
              {game.cardComponent}
            </GameCard>
          ))}
        </div>
      </motion.div>

      {/* Theatre Mode Modal */}
      {selectedGame && (
        <TheatreModal
          isOpen={!!selectedGame}
          onClose={() => setSelectedGame(null)}
          title={selectedGame.title}
        >
          {selectedGame.theatreComponent}
        </TheatreModal>
      )}
    </Section>
  );
};

