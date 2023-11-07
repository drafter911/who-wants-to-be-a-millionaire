import styled, { css } from 'styled-components';
import { DEVICE } from '../../../../../shared/constants';

interface IStyledWrapperProps {
  $collapsed: boolean;
}

export const StyledWrapper = styled.div<IStyledWrapperProps>`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: width 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.colors.baseLighter};
  z-index: 999;

  @media (${DEVICE.MIN_SM}) {
    position: static;
    width: 376px;
    background-color: ${({ theme }) => theme.colors.baseLightest};
  }

  && {
    ${({ $collapsed }) => $collapsed && css`
      width: 0;
      height: 0;
      transition: width 0.3s ease-in-out;
      
      > * {
        display: none;
      }
    `};
  }
`;

export default StyledWrapper;
