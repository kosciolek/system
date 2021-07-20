import { StyledComponentPropsWithRef } from "styled-components";
import * as CSS from "csstype";
export declare type BoxProps = StyledComponentPropsWithRef<typeof Box>;
export declare const Box: import("styled-components").StyledComponent<"div", any, {
    display?: CSS.Properties["display"];
    justifyItems?: CSS.Properties["justifyItems"];
    justifyContent?: CSS.Properties["justifyContent"];
    alignContent?: CSS.Properties["alignContent"];
    alignItems?: CSS.Properties["alignItems"];
}, never>;
