import styled from 'styled-components';
import { DEVICE } from '../../../constants';

interface IStyledButtonProps {
  $width?: string;
}

const StyledButton = styled.button<IStyledButtonProps>`
  width: ${({ $width = 'auto' }) => $width};
  height: 48px;
  padding: 16px 24px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.16;
  color: ${({ theme }) => theme.colors.baseLightest};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.main};

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainLight};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.mainDark};
  }

  @media (${DEVICE.MIN_LG}) {
    height: 64px;
    padding: 21px 24px 20px;
    font-size: 20px;
  }
`;

export default StyledButton;
