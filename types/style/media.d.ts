export declare const breakpoints: {
    readonly xs: 0;
    readonly sm: 600;
    readonly md: 960;
    readonly lg: 1280;
    readonly xl: 1920;
};
export declare type Breakpoints = typeof breakpoints;
export declare type BreakpointKeys = keyof Breakpoints;
export declare type MediaObject<T extends "max" | "min"> = {
    [K in BreakpointKeys]: `@media screen and (${T}-width: ${typeof breakpoints[K]})`;
} & {
    [K in BreakpointKeys as `use${Capitalize<K>}`]: () => boolean;
} & {
    useQuery: (width: number) => boolean;
};
export declare const useMedia: (width: number, type: "min" | "max") => boolean;
export declare type Media = (<T extends number>(minWidth: T) => `@media screen and (min-width: ${T}px)`) & {
    down: (<T extends number>(maxWidth: T) => `@media screen and (max-width: ${T}px)`) & MediaObject<"max">;
} & MediaObject<"min">;
export declare const createMedia: () => {
    media: Media;
    createMediaSubquery: {
        (breakpoint: BreakpointKeys, type?: "min" | "max" | undefined): any;
        (width: number, type?: "min" | "max" | undefined): any;
    };
};
