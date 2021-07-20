/// <reference types="react" />
export declare function useIntersection({ rootMargin, threshold, }?: Omit<IntersectionObserverInit, "root">): readonly [import("react").Dispatch<import("react").SetStateAction<HTMLElement | null>>, IntersectionObserverEntry | null, import("react").Dispatch<import("react").SetStateAction<HTMLElement | null>>];
