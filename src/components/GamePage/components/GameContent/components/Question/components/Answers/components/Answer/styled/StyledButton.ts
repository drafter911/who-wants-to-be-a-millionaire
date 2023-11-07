import styled from 'styled-components';
import { DEVICE } from '../../../../../../../../../../../shared/constants';

interface IStyledButtonProps {
  onClick: (answerId: string) => void;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  width: 100%;
  margin-bottom: 8px;
  border: none;
  background: none;

  @media (${DEVICE.MIN_MD}) {
    width: 50%;
    margin-bottom: 32px;
  }
`;

export default StyledButton;
