import { TAsHeading } from 'styled-components';

export type TFontSizes = {
  [key in TAsHeading]: string;
};

export const FONT_SIZES_DESKTOP: TFontSizes = Object.freeze({
  h1: '56px',
  h2: '32px',
});

export const FONT_SIZES_MOBILE: TFontSizes = Object.freeze({
  h1: '32px',
  h2: '18px',
});
