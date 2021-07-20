export declare const useWindowEvent: <K extends keyof WindowEventMap>(event: K, listener: (e: WindowEventMap[K]) => void, { capture, passive, once }?: AddEventListenerOptions) => void;
