import { StyledComponentPropsWithRef } from "styled-components";
import * as CSS from 'csstype';
export declare type FlexProps = StyledComponentPropsWithRef<typeof Flex>;
export declare const Flex: import("styled-components").StyledComponent<"div", any, {
    display?: CSS.Property.Display | undefined;
    justifyItems?: CSS.Property.JustifyItems | undefined;
    justifyContent?: CSS.Property.JustifyContent | undefined;
    alignContent?: CSS.Property.AlignContent | undefined;
    alignItems?: CSS.Property.AlignItems | undefined;
}, never>;
