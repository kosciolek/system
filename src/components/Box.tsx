import styled, { StyledComponentPropsWithRef } from "styled-components";
import * as CSS from "csstype";

export type BoxProps = StyledComponentPropsWithRef<typeof Box>;

export const Box = styled.div<{
  display?: CSS.Properties["display"];
  justifyItems?: CSS.Properties["justifyItems"];
  justifyContent?: CSS.Properties["justifyContent"];
  alignContent?: CSS.Properties["alignContent"];
  alignItems?: CSS.Properties["alignItems"];
}>``;
