import { useLayoutEffect, useState } from "react";
import { firstToUppercase } from "../utils/js";
export const breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
};
export const useMedia = (width, type) => {
    const [matches, setMatches] = useState(true);
    useLayoutEffect(() => {
        const mediaQuery = window.matchMedia(`screen and (${type}-width: ${width}px)`);
        setMatches(mediaQuery.matches);
        const listener = (ev) => setMatches(ev.matches);
        mediaQuery.addEventListener("change", listener);
        return () => mediaQuery.removeEventListener("change", listener);
    }, []);
    return matches;
};
const createMediaObject = (type) => Object.entries(breakpoints).reduce((acc, [breakpoint, value]) => {
    acc[breakpoint] = `@media screen and (${type}-width: ${value}px)`;
    acc[`use${firstToUppercase(breakpoint)}`] = () => useMedia(value, type);
    return acc;
}, {});
export const createMedia = () => {
    /* Min func */
    const media = ((minWidth) => `@media screen and (min-width: ${minWidth}px)`);
    /* Max breakpoint funcs & hooks */
    Object.assign(media, createMediaObject("min"));
    /* Min any hook */
    media.useQuery = (minWidth) => useMedia(minWidth, "min");
    /* Max func */
    media.down = ((minWidth) => `@media screen and (min-width: ${minWidth}px)`);
    /* Max breakpoint funcs & hooks */
    Object.assign(media.down, createMediaObject("max"));
    /* Max any hook */
    media.down.useQuery = (minWidth) => useMedia(minWidth, "max");
    function createMediaSubquery(breakpointOrWidth, type) {
        const source = type === "min" ? media : media.down;
        return typeof breakpointOrWidth === "string"
            ? {
                useQuery: source[`use${firstToUppercase(breakpointOrWidth)}`],
                query: source[breakpointOrWidth],
            }
            : {
                useQuery: (width) => source.useQuery(width),
                query: (width) => source(width),
            };
    }
    return { media, createMediaSubquery };
};
const { media, createMediaSubquery } = createMedia();
