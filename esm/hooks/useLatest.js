import { useEffect, useRef } from "react";
export const useLatest = (val) => {
    const ref = useRef(val);
    useEffect(() => {
        ref.current = val;
    }, [val]);
    return ref;
};
