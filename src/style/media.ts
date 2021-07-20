import { useLayoutEffect, useState } from "react";
import { firstToUppercase } from "../utils/js";

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
} as const;

export type Breakpoints = typeof breakpoints;
export type BreakpointKeys = keyof Breakpoints;
export type MediaObject<T extends "max" | "min"> = {
  [K in BreakpointKeys]: `@media screen and (${T}-width: ${typeof breakpoints[K]})`;
} &
  {
    [K in BreakpointKeys as `use${Capitalize<K>}`]: () => boolean;
  } & {
    useQuery: (width: number) => boolean;
  };

export const useMedia = (width: number, type: "min" | "max") => {
  const [matches, setMatches] = useState(true);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia(
      `screen and (${type}-width: ${width}px)`
    );
    setMatches(mediaQuery.matches);
    const listener = (ev: MediaQueryListEvent) => setMatches(ev.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return matches;
};

const createMediaObject = <T extends "max" | "min">(type: T) =>
  Object.entries(breakpoints).reduce((acc, [breakpoint, value]) => {
    acc[breakpoint] = `@media screen and (${type}-width: ${value}px)`;
    acc[`use${firstToUppercase(breakpoint)}`] = () => useMedia(value, type);
    return acc;
  }, {} as any) as MediaObject<T>;

export type Media = (<T extends number>(
  minWidth: T
) => `@media screen and (min-width: ${T}px)`) & {
  down: (<T extends number>(
    maxWidth: T
  ) => `@media screen and (max-width: ${T}px)`) &
    MediaObject<"max">;
} & MediaObject<"min">;

export const createMedia = () => {
  /* Min func */
  const media: Media = (<T extends number>(minWidth: T) =>
    `@media screen and (min-width: ${minWidth}px)`) as any;
  /* Max breakpoint funcs & hooks */
  Object.assign(media, createMediaObject("min"));
  /* Min any hook */
  media.useQuery = (minWidth: number) => useMedia(minWidth, "min");
  /* Max func */
  media.down = (<T extends number>(minWidth: T) =>
    `@media screen and (min-width: ${minWidth}px)`) as any;
  /* Max breakpoint funcs & hooks */
  Object.assign(media.down, createMediaObject("max"));
  /* Max any hook */
  media.down.useQuery = (minWidth: number) => useMedia(minWidth, "max");

  function createMediaSubquery(
    breakpoint: BreakpointKeys,
    type?: "max" | "min"
  );
  function createMediaSubquery(width: number, type?: "max" | "min");
  function createMediaSubquery(
    breakpointOrWidth: BreakpointKeys | number,
    type?: "max" | "min"
  ) {
    const source = type === "min" ? media : media.down;
    return typeof breakpointOrWidth === "string"
      ? {
          useQuery: source[`use${firstToUppercase(breakpointOrWidth)}`],
          query: source[breakpointOrWidth],
        }
      : {
          useQuery: (width: number) => source.useQuery(width),
          query: (width: number) => source(width),
        };
  }

  return { media, createMediaSubquery };
};
