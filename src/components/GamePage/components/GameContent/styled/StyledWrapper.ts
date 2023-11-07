import styled from 'styled-components';
import { DEVICE } from '../../../../../shared/constants';

export const StyledWrapper = styled.div`
  flex: auto;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.baseLighter};
  
  @media (${DEVICE.MIN_MD}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledWrapper;
