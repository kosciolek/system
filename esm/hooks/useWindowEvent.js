import { useEffect } from "react";
import { useLatest } from "./useLatest.js";
export const useWindowEvent = (event, listener, { capture, passive, once } = {}) => {
    const latestCallbackRef = useLatest(listener);
    useEffect(() => {
        const _listener = e => { var _a; return (_a = latestCallbackRef.current) === null || _a === void 0 ? void 0 : _a.call(latestCallbackRef, e); };
        window.addEventListener(event, _listener, { capture, passive, once });
        return () => window.removeEventListener(event, _listener);
    }, [capture, passive, once]);
};
