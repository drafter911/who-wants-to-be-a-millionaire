import styled from 'styled-components';
import { DEVICE } from '../../../../../constants';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media (${DEVICE.MIN_LG}) {
    justify-content: center;
    align-items: flex-start;
    width: 624px;
    height: 367px;
    max-width: 624px;
    padding: 5px 0;
  }
`;

export default StyledWrapper;
