import { useState, useEffect, useRef } from 'react';

export const useAnimatedCounter = (endValue: number, duration: number = 500) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number | null>(null);
  const startValueRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    startValueRef.current = count; // Start animation from the current displayed value
    startTimeRef.current = null;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const easeOutCubic = (t: number) => (--t) * t * t + 1;
      const percentage = easeOutCubic(Math.min(progress / duration, 1));
      
      const current = startValueRef.current + (endValue - startValueRef.current) * percentage;
      setCount(current);

      if (progress < duration) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(endValue); // Ensure it ends exactly on the target value
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [endValue, duration]);

  return count;
};