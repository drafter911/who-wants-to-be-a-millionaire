import styled, { ITextProps, TAsText } from 'styled-components';

interface IStyledTextProps extends ITextProps {
  as?: TAsText;
  $width?: string;
}

export const StyledText = styled.p<IStyledTextProps>`
  margin: ${({ $margin }) => $margin || 0};
  font-family: ${({ theme }) => theme.fonts.interBold};
  font-size: ${({ $fontSize }) => $fontSize || '14px'};
  line-height: ${({ $lineHeight = 1.16 }) => $lineHeight};
  font-weight: ${({ $fontWeight }) => $fontWeight || 'normal'};
  color: ${({ theme, $color }) => $color || theme.colors.baseDark};
  text-align: ${({ $align }) => $align || 'left'};
  width: ${({ $width }) => $width || 'auto'};
  max-width: 100%;
`;

export default StyledText;
