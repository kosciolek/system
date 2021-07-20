import { useEffect, useRef } from "react";
import { useElements } from "./useElements.js";
export function useMouseLeave(callback) {
    const { elements: roots, addElement: addRoot } = useElements();
    const callbackLatestRef = useRef(callback);
    useEffect(() => {
        callbackLatestRef.current = callback;
    }, [callback]);
    useEffect(() => {
        const listener = (e) => {
            var _a;
            if (!Object.values(roots).some(root => root.contains(e.relatedTarget))) {
                (_a = callbackLatestRef.current) === null || _a === void 0 ? void 0 : _a.call(callbackLatestRef, e);
            }
        };
        Object.values(roots).forEach(elem => elem.addEventListener("mouseleave", listener));
        return () => Object.values(roots).forEach(elem => elem.removeEventListener("mouseleave", listener));
    }, [roots]);
    return addRoot;
}
