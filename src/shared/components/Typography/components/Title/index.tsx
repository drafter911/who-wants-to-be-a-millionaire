import React from 'react';
import { TFontWeight, TTextAlign } from 'styled-components';
import StyledHeading from './styled';

export interface ITitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  align?: TTextAlign;
  fontWeight?: TFontWeight;
  lineHeight?: string | number;
  margin?: string | number;
  color?: string;
  opacity?: number;
  fontSize?: string;
}

function Title({
  children, level = 1, align, fontWeight, margin, lineHeight, color, opacity, fontSize,
}: ITitleProps) {
  return (
    <StyledHeading
      as={`h${level}`}
      $align={align}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $lineHeight={lineHeight}
      $margin={margin}
      $color={color}
      $opacity={opacity}
    >
      {children}
    </StyledHeading>
  );
}

Title.defaultProps = {
  level: undefined,
  align: 'left' as TTextAlign,
  fontWeight: undefined,
  lineHeight: undefined,
  margin: undefined,
  color: undefined,
  opacity: undefined,
  fontSize: undefined,
};

export default Title;
