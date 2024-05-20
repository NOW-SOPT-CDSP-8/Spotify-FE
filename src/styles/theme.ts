import { css } from 'styled-components';
import mixin from './mixin';

const colors = {
  green: '#1ED760',
  black: '#000000',
  gray900: '#121212',
  gray700: '#181818',
  gray500: '#222222',
  gray400: '#323232',
  gray300: '#696969',
  gray200: '#A5A5A5',
  gray100: '#A9A9A9',
  white: '#FFFFFF',
};

const fonts = {
  title1: css`
    font-family: 'SF Pro';
    font-weight: 510;
    font-size: 3rem;
    line-height: normal;
  `,
  title2: css`
    font-family: 'SF Pro';
    font-weight: 510;
    font-size: 2.8rem;
    line-height: normal;
  `,
  title3: css`
    font-family: 'SF Pro';
    font-weight: 590;
    font-size: 2.4rem;
    line-height: 140%;
  `,
  title4: css`
    font-family: 'SF Pro';
    font-weight: 510;
    font-size: 2.2rem;
    line-height: 140%;
  `,
  title5: css`
    font-family: 'Gotham';
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 140%;
  `,
  title6: css`
    font-family: 'Circular Spotify Text';
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  headline1: css`
    font-family: 'SF Pro';
    font-weight: 590;
    font-size: 1.8rem;
    line-height: normal;
  `,
  headline2: css`
    font-family: 'SF Pro';
    font-weight: 510;
    font-size: 1.7rem;
    line-height: normal;
  `,
  body1: css`
    font-family: 'SF Pro';
    font-weight: 274;
    font-size: 1.6rem;
    line-height: normal;
  `,
  body2_medi: css`
    font-family: 'SF Pro';
    font-weight: 510;
    font-size: 1.5rem;
    line-height: normal;
  `,
  body2_reg: css`
    font-family: 'SF Pro';
    font-weight: 400;
    font-size: 1.5rem;
    line-height: normal;
  `,
  body3_semi: css`
    font-family: 'SF Pro';
    font-weight: 590;
    font-size: 1.3rem;
    line-height: 145%;
  `,
  body3_medi: css`
    font-family: 'SF Pro';
    font-weight: 510;
    font-size: 1.3rem;
    line-height: 145%;
  `,
  body3_reg: css`
    font-family: 'SF Pro';
    font-weight: 400;
    font-size: 1.3rem;
    line-height: normal;
  `,
  body4: css`
    font-family: 'SF Pro';
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 140%;
  `,
  caption1: css`
    font-family: 'SF Pro';
    font-weight: 400;
    font-size: 1.2rem;
    line-height: normal;
  `,
  caption2: css`
    font-family: 'SF Pro';
    font-weight: 400;
    font-size: 1.1rem;
    line-height: normal;
  `,
  caption3: css`
    font-family: 'SF Pro';
    font-weight: 400;
    font-size: 1rem;
    line-height: 140%;
  `,
  caption4: css`
    font-family: 'SF Pro';
    font-weight: 400;
    font-size: 1.9rem;
    line-height: 140%;
  `,
  caption5: css`
    font-family: 'SF Pro';
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  category: css`
    font-family: 'SF Pro';
    font-weight: 510;
    font-size: 1.9rem;
    line-height: normal;
    letter-spacing: -0.76px;
  `,
  button: css`
    font-family: 'SF Pro';
    font-weight: 590;
    font-size: 1.2rem;
    line-height: 145%;
  `,
  detail1: css`
    font-family: 'Circular Spotify Text';
    font-weight: 400;
    font-size: 1.6rem;
    line-height: normal;
  `,
  detail2: css`
    font-family: 'Circular Spotify Text';
    font-weight: 400;
    font-size: 1.3rem;
    line-height: normal;
    letter-spacing: -0.26px;
  `,
  detail3_medi: css`
    font-family: 'Circular Spotify Text';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,
  detail3_bold: css`
    font-family: 'Circular Spotify Text';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
};

const theme = {
  colors,
  fonts,
  mixin,
};

export default theme;
