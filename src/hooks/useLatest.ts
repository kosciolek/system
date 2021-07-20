import { useEffect, useRef } from "react";

export const useLatest = <T = any>(val: T) => {
  const ref = useRef(val);

  useEffect(() => {
    ref.current = val;
  }, [val]);

  return ref;
};
