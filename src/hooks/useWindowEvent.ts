import { useEffect } from "react";
import { useLatest } from "./useLatest.js";

export const useWindowEvent = <K extends keyof WindowEventMap>(
  event: K,
  listener: (e: WindowEventMap[K]) => void,
  { capture, passive, once }: AddEventListenerOptions = {}
) => {
  const latestCallbackRef = useLatest(listener);

  useEffect(() => {
    const _listener = (e) => latestCallbackRef.current?.(e);
    window.addEventListener(event, _listener, { capture, passive, once });
    return () => window.removeEventListener(event, _listener);
  }, [capture, passive, once]);
};
