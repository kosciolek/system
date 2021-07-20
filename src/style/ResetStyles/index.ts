import { createGlobalStyle, css } from "styled-components";
import { normalizeCss } from "./normalizeCss.js";

export const ResetStyles = createGlobalStyle`${css`
  html,
  body {
    margin: 0;
    padding: 0;
  }

  ${normalizeCss}
`}`;
