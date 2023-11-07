import styled, { ITextProps, TAsHeading } from 'styled-components';
import { DEVICE } from '../../../../../constants';
import { FONT_SIZES_DESKTOP, FONT_SIZES_MOBILE, TFontSizes } from '../constants';

interface IStyledHeadingProps extends ITextProps {
  as: TAsHeading;
  $opacity?: number;
  $width?: string;
}

const StyledHeading = styled.h1<IStyledHeadingProps>`
  width: ${({ $width }) => $width || 'auto'};
  max-width: 100%;
  margin: ${({ $margin }) => $margin || 0};
  font-family: ${({ theme }) => theme.fonts.interBold};
  font-size: ${({ $fontSize, as = 'h1' }) => $fontSize || FONT_SIZES_MOBILE[as as keyof TFontSizes]};
  line-height: ${({ $lineHeight = 1.16 }) => $lineHeight};
  font-weight: ${({ $fontWeight }) => $fontWeight || 600};
  color: ${({ theme, $color }) => $color || theme.colors.baseDark};
  text-align: ${({ $align }) => $align || 'left'};
  opacity: ${({ $opacity = 1 }) => $opacity};

  @media (${DEVICE.MIN_MD}) {
    font-size: ${({ $fontSize, as = 'h1' }) => $fontSize || FONT_SIZES_DESKTOP[as as keyof TFontSizes]};
  }
`;

export default StyledHeading;
