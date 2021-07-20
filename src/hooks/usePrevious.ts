import { useEffect, useRef } from "react";

export const usePrevious = <T = any>(val: T) => {
  const prevRef = useRef<T | null>(null);

  useEffect(() => {
    prevRef.current = val;
  }, [val]);

  return prevRef.current;
};
