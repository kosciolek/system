import { useEffect, useRef } from "react";
export const usePrevious = (val) => {
    const prevRef = useRef(null);
    useEffect(() => {
        prevRef.current = val;
    }, [val]);
    return prevRef.current;
};
