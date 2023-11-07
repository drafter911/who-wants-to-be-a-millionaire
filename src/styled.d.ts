import 'styled-components';

declare module 'styled-components' {
  export interface IDefaultTheme {
    colors: {
      mainDark: string;
      main: string;
      mainLight: string;
      mainLighter: string;
      success: string;
      successLighter: string;
      warning: string;
      warningLighter: string;
      baseDark: string;
      base: string;
      baseLighter: string;
      baseLightest: string;
    };
    fonts: {
      inter: string;
      interBold: string;
    };
    indents: {
      XXS: string;
      XS: string;
      S: string;
      M: string;
      L: string;
      XL: string;
      XXL: string;
      XXXL: string;
    }
  }

  export type TTextAlign = 'left' | 'center' | 'right' | 'justify';

  export type TFontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | 'initial' | 'inherit' | number;

  export type TAsText = 'span' | 'p' | 'div';

  export type TAsHeading = 'h1' | 'h2';

  export interface ITextProps {
    $color?: string;
    $fontSize?: string;
    $fontWeight?: TFontWeight;
    $lineHeight?: string | number;
    $align?: TTextAlign;
    $margin?: string | number;
  }
}
