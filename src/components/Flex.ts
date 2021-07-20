import styled, { StyledComponentPropsWithRef } from "styled-components";
import { Box } from "./Box.js";

export type FlexProps = StyledComponentPropsWithRef<typeof Flex>;

export const Flex = styled(Box)`
  display: flex;
`;
