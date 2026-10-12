/**
 * Composable for military text cipher / scramble reveal effect
 */
export function useScramble() {
  const chars = '█▓▒░#$*+0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_';

  /**
   * Scrambles an element's text over a given duration
   * @param {string} targetText
   * @param {Function} onUpdate - callback receiving current scrambled text
   * @param {number} [durationMs=1200]
   */
  const scramble = (targetText, onUpdate, durationMs = 1200) => {
    if (!targetText) return;
    
    // Fallback if reduced motion is preferred
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onUpdate(targetText);
      return;
    }

    const length = targetText.length;
    const startTime = performance.now();
    let frameId;

    const tick = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const solvedCount = Math.floor(progress * length);

      let result = '';
      for (let i = 0; i < length; i++) {
        if (targetText[i] === ' ') {
          result += ' ';
        } else if (i < solvedCount) {
          result += targetText[i];
        } else {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      onUpdate(result);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        onUpdate(targetText);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  };

  return {
    scramble
  };
}
