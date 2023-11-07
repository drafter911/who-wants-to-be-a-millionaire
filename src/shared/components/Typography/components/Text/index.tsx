import React from 'react';
import { TAsText, TFontWeight, TTextAlign } from 'styled-components';
import { StyledText } from './styled';

export interface ITextProps {
  children: React.ReactNode;
  align?: TTextAlign;
  fontWeight?: TFontWeight;
  lineHeight?: string | number;
  margin?: string | number;
  as?: TAsText;
  fontSize?: string;
  color?: string;
  width?: string;
  title?: string;
}

function Text({
  children, align, fontWeight, margin, lineHeight, as, fontSize, color, width, title,
}: ITextProps) {
  return (
    <StyledText
      as={as}
      $align={align}
      $fontWeight={fontWeight}
      $lineHeight={lineHeight}
      $margin={margin}
      $fontSize={fontSize}
      $color={color}
      $width={width}
      title={title}
    >
      {children}
    </StyledText>
  );
}

Text.defaultProps = {
  align: 'left' as TTextAlign,
  fontWeight: 'normal' as TFontWeight,
  lineHeight: undefined,
  margin: 0,
  as: undefined,
  fontSize: undefined,
  color: undefined,
  width: undefined,
  title: '',
};

export default Text;
