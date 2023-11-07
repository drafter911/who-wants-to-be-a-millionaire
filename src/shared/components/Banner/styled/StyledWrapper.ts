import styled, { css, RuleSet } from 'styled-components';
import { DEVICE } from '../../../constants';

interface IStyledWrapperProps {
  $background?: string | RuleSet | null
}

const gradient = css`
linear-gradient(to right bottom,
  ${(props) => props.theme.colors.baseLightest} 50%,
  ${(props) => props.theme.colors.mainLighter} 50%)
`;

export const StyledWrapper = styled.div<IStyledWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: ${(80 / (568 / 100))}vh 16px 48px;
  background: ${({ $background = gradient }) => $background || gradient};

  @media (${DEVICE.MIN_LG}) {
    flex-direction: row;
    padding: 0;
  }
`;

export default StyledWrapper;
