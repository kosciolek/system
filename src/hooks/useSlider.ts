import React, {
  useCallback,
  useLayoutEffect,
  useState,
} from "react";
import { useDrag } from "react-use-gesture";
import { clamp } from "../utils/js.js";
import { useResizeObserver } from "./useResizeObserver.js";

export function useSlider({
  orientation = "horizontal",
  // direction = "normal",
  min,
  max,
  initial,
}: {
  min: number;
  max: number;
  initial: number;
  orientation?: "vertical" | "horizontal";
  direction?: "normal" | "reverse";
}) {
  const [root, setRoot] = useState<HTMLElement | null>(null);
  const [value, setValue] = useState(initial);

  const [thumbOffset, setThumbOffset] = useState<null | number>(null);
  useLayoutEffect(() => {
    if (!root) return;
    const { width } = root.getBoundingClientRect();
    setThumbOffset(((initial - min) / (max - min)) * width);
  }, [root]);

  const [_, setObserved] = useResizeObserver();
  const [isSliding, setIsSliding] = useState(false);
  const bind = useDrag(
    ({ event, down }) => {
      if (!root) return;
      setIsSliding(down);

      const rootRect = root.getBoundingClientRect();
      const rootLength =
        orientation === "horizontal" ? rootRect.width : rootRect.height;
      const globalRootOffset =
        orientation === "horizontal" ? rootRect.x : rootRect.y;

      const {nativeEvent} = event as React.MouseEvent;
      const globalPointerOffset =
        orientation === "horizontal"
          ? nativeEvent.clientX
          : nativeEvent.clientY;

      const pointerOffset = clamp(
        0,
        globalPointerOffset - globalRootOffset,
        rootLength
      );
      setThumbOffset(pointerOffset);

      const offsetInterpolated =
        (pointerOffset / rootLength) * (max - min) + min;
      setValue(offsetInterpolated);
    },
    {
      filterTaps: false,
    }
  );

  const _setRoot = useCallback((elem: HTMLElement | null) => {
    setRoot(elem);
    setObserved(elem);
  }, []);

  return {
    rootProps: { ...bind(), ref: _setRoot },
    value,
    isSliding,
    thumbOffset,
  };
}
