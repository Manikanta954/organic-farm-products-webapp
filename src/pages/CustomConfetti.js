// CustomConfetti.js
import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const CustomConfetti = ({ trigger }) => {
  useEffect(() => {
    if (trigger) {
      // Create a confetti instance
      const fireConfetti = () => {
        const duration = 998; // Duration in milliseconds
        const end = Date.now() + duration;

        const colors = ['#ff0a0a','#09F3FF', '#ffea00', '#00eaff', '#ff00a8', '#00ff0a','#C60FFA','#F5E104']; // Array of colors

        (function frame() {
          if (Date.now() > end) return;
          confetti({
            particleCount: 50,
            startVelocity: 30,
            spread: 500,
            origin: { x: 0.5, y: 0.5 },
            colors: colors
          });
          requestAnimationFrame(frame);
        })();
      };

      fireConfetti();
    }
  }, [trigger]);

  return null;
};

export default CustomConfetti;
