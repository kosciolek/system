import { useLayoutEffect, useState } from "react";
export function useResizeObserver() {
    const [observed, setObserved] = useState(null);
    const [entry, setEntry] = useState(null);
    useLayoutEffect(() => {
        if (!observed) {
            setEntry(null);
            return () => { };
        }
        const ro = new ResizeObserver(([_entry]) => {
            const { blockSize: height, inlineSize: width } = _entry.borderBoxSize[0];
            setEntry({ width, height });
        });
        ro.observe(observed);
        return () => ro.disconnect();
    }, [observed]);
    return [entry, setObserved];
}