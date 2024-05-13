import { css } from "styled-components";

const colors = {
  green: "#1ED760",
  black: "#000000",
  gray900: "#121212",
  gray700: "#181818",
  gray500: "#222222",
  gray400: "#323232",
  gray300: "#696969",
  gray200: "#A5A5A5",
  gray100: "#A9A9A9",
  white: "#FFFFFF",
};

const fonts = {
  title1: css`
    font-family: "SF Pro";
    font-weight: medium;
    font-size: 3rem;
    line-height: auto;
  `,
  title2: css`
    font-family: "SF Pro";
    font-weight: medium;
    font-size: 2.8rem;
    line-height: auto;
  `,
  title3: css`
    font-family: "SF Pro";
    font-weight: semibold;
    font-size: 2.4rem;
    line-height: 140%;
  `,
  title4: css`
    font-family: "SF Pro";
    font-weight: semibold;
    font-size: 2.2rem;
    line-height: 140%;
  `,
  title5: css`
    font-family: "Gotham";
    font-weight: bold;
    font-size: 1.7rem;
    line-height: 140%;
  `,
  headline1: css`
    font-family: "SF Pro";
    font-weight: semibold;
    font-size: 1.8rem;
    line-height: auto;
  `,
  headline2: css`
    font-family: "SF Pro";
    font-weight: medium;
    font-size: 1.7rem;
    line-height: auto;
  `,
  body1: css`
    font-family: "SF Pro";
    font-weight: light;
    font-size: 1.6rem;
    line-height: auto;
  `,
  body2_medi: css`
    font-family: "SF Pro";
    font-weight: medium;
    font-size: 1.5rem;
    line-height: auto;
  `,
  body2_reg: css`
    font-family: "SF Pro";
    font-weight: regular;
    font-size: 1.5rem;
    line-height: auto;
  `,
  body3_semi: css`
    font-family: "SF Pro";
    font-weight: semibold;
    font-size: 1.3rem;
    line-height: 145%;
  `,
  body3_medi: css`
    font-family: "SF Pro";
    font-weight: medium;
    font-size: 1.3rem;
    line-height: 145%;
  `,
  body3_reg: css`
    font-family: "SF Pro";
    font-weight: regular;
    font-size: 1.3rem;
    line-height: auto;
  `,
  body4: css`
    font-family: "SF Pro";
    font-weight: regular;
    font-size: 1.2rem;
    line-height: 140%;
  `,
  caption1: css`
    font-family: "SF Pro";
    font-weight: regular;
    font-size: 1.2rem;
    line-height: auto;
  `,
  caption2: css`
    font-family: "SF Pro";
    font-weight: regular;
    font-size: 1.1rem;
    line-height: auto;
  `,
  caption3: css`
    font-family: "SF Pro";
    font-weight: regular;
    font-size: 1rem;
    line-height: 140%;
  `,
  caption4: css`
    font-family: "SF Pro";
    font-weight: regular;
    font-size: 1.9rem;
    line-height: 140%;
  `,
  category: css`
    font-family: "SF Pro";
    font-weight: medium;
    font-size: 1.9rem;
    line-height: auto;
  `,
  button: css`
    font-family: "SF Pro";
    font-weight: medium;
    font-size: 1.2rem;
    line-height: 145%;
  `,
  detal1: css`
    font-family: "Circular Spotify Text";
    font-weight: book;
    font-size: 1.6rem;
    line-height: auto;
  `,
  detal2: css`
    font-family: "Circular Spotify Text";
    font-weight: book;
    font-size: 1.3rem;
    line-height: auto;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
