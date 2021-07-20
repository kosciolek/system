/// <reference types="react" />
export declare function useBool(initial: boolean): {
    value: boolean;
    setValue: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    toggle: () => void;
    setFalse: () => void;
    setTrue: () => void;
};
