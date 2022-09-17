import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

export const mobile2 = (props) => {
  return css`
    @media only screen and (max-width: 561px) {
      ${props}
    }
  `;
};

export const mobile3 = (props) => {
  return css`
    @media only screen and (max-width: 425px) {
      ${props}
    }
  `;
};
