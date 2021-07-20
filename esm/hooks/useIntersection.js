import { useLayoutEffect, useState } from "react";
export function useIntersection({ rootMargin, threshold } = {}) {
    const [observed, setObserved] = useState(null);
    const [root, setRoot] = useState(null);
    const [entry, setEntry] = useState(null);
    useLayoutEffect(() => {
        if (!observed) {
            setEntry(null);
            return () => { };
        }
        const io = new IntersectionObserver(([_entry]) => {
            setEntry(_entry);
        }, { rootMargin, threshold, root });
        io.observe(observed);
        return () => io.disconnect();
    }, [observed, root, rootMargin, threshold]);
    return [setObserved, entry, setRoot];
}
