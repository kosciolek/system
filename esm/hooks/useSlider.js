import { useCallback, useLayoutEffect, useState, } from "react";
import { useDrag } from "react-use-gesture";
import { clamp } from "../utils/js.js";
import { useResizeObserver } from "./useResizeObserver.js";
export function useSlider({ orientation = "horizontal", direction = "normal", min, max, initial, }) {
    const [root, setRoot] = useState(null);
    const [value, setValue] = useState(initial);
    const [thumbOffset, setThumbOffset] = useState(null);
    useLayoutEffect(() => {
        if (!root)
            return;
        const { width } = root.getBoundingClientRect();
        setThumbOffset(((initial - min) / (max - min)) * width);
    }, [root]);
    const [entry, setObserved] = useResizeObserver();
    const [isSliding, setIsSliding] = useState(false);
    const bind = useDrag(({ event, down }) => {
        if (!root)
            return;
        setIsSliding(down);
        const rootRect = root.getBoundingClientRect();
        const rootLength = orientation === "horizontal" ? rootRect.width : rootRect.height;
        const globalRootOffset = orientation === "horizontal" ? rootRect.x : rootRect.y;
        const nativeEvent = event.nativeEvent;
        const globalPointerOffset = orientation === "horizontal"
            ? nativeEvent.clientX
            : nativeEvent.clientY;
        const pointerOffset = clamp(0, globalPointerOffset - globalRootOffset, rootLength);
        setThumbOffset(pointerOffset);
        const offsetInterpolated = (pointerOffset / rootLength) * (max - min) + min;
        setValue(offsetInterpolated);
    }, {
        filterTaps: false,
    });
    const _setRoot = useCallback((elem) => {
        setRoot(elem);
        setObserved(elem);
    }, []);
    return {
        rootProps: Object.assign(Object.assign({}, bind()), { ref: _setRoot }),
        value,
        isSliding,
        thumbOffset: thumbOffset,
    };
}
