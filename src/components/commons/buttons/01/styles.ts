import { css, SerializedStyles } from "@emotion/react";

const styles = {
  default: css`
    padding: 1rem 2rem;
    max-width: 300px;
    width: 90%;
    border: 0;
    border-radius: 2rem;
    font-size: 1.25rem;
    cursor: pointer;
    transition: all ease 0.5s;
    :hover {
      filter: drop-shadow(0px 4px 13px rgba(0, 0, 0, 0.5));
    }
  `,
  lightGreen: css`
    background-color: #00c896;
    color: #fff;
  `,

  lightYellow: css`
    background-color: #feed36;

    :disabled {
      background-color: #d4d4d444;
      color: #d4d4d4;
    }
  `,
};

export const buttonCss: {
  [index: string]: SerializedStyles;
} = {
  default: styles.default,
  다시풀기: styles.lightGreen,
  퀴즈풀기: styles.lightYellow,
  "다음 >": styles.lightYellow,
};
