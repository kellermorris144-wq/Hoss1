import { useState, useEffect, useRef } from 'react';

export const useAnimatedCounter = (endValue: number) => {
  // State for the value that will be rendered
  const [currentValue, setCurrentValue] = useState(endValue);
  
  // Refs to hold the latest target value and the current animated value
  // without causing re-renders on their own.
  const targetValueRef = useRef(endValue);
  const currentValueRef = useRef(endValue);
  const frameRef = useRef<number | null>(null);

  // Update the target value ref whenever the endValue prop changes
  useEffect(() => {
    targetValueRef.current = endValue;
  }, [endValue]);

  // The main animation loop, runs only once on mount
  useEffect(() => {
    const animate = () => {
      const target = targetValueRef.current;
      const current = currentValueRef.current;
      const difference = target - current;
      
      // Only animate if there's a noticeable difference
      if (Math.abs(difference) > 0.01) {
        // Move 10% of the way to the target value each frame.
        // This creates a smooth, dampened motion.
        const nextValue = current + difference * 0.1;
        currentValueRef.current = nextValue;
        setCurrentValue(nextValue);
      } else if (current !== target) {
        // If the difference is tiny, just snap to the target value
        // to finish the animation cleanly.
        currentValueRef.current = target;
        setCurrentValue(target);
      }
      
      // Continue the loop
      frameRef.current = requestAnimationFrame(animate);
    };

    // Start the animation loop
    frameRef.current = requestAnimationFrame(animate);

    // Cleanup function to cancel the loop when the component unmounts
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  return currentValue;
};