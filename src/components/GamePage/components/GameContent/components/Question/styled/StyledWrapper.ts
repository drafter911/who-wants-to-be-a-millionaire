import styled from 'styled-components';
import { DEVICE } from '../../../../../../../shared/constants';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 922px;
  padding: 48px 0 16px;

  @media(${DEVICE.MIN_LG}) {
    padding: 133px 0 90px 20px;
  }
  
  @media(${DEVICE.MIN_XL}) {
    padding: 133px 0 90px 80px;
  }
`;

export default StyledWrapper;
