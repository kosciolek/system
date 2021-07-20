/// <reference types="react" />
export declare type Key = number | string;
export declare function useElements<T extends Key = Key>(): {
    readonly elements: Record<Key, HTMLElement>;
    readonly addElement: (key: T) => Record<Key, (instance: HTMLElement | null) => void>[T];
    readonly elementsRef: import("react").MutableRefObject<Record<Key, HTMLElement>>;
    readonly hasElements: boolean;
};
