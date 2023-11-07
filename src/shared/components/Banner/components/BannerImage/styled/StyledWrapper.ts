import styled from 'styled-components';
import { DEVICE } from '../../../../../constants';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 288px;
  height: 192px;
  max-width: 100%;
  margin-bottom: 24px;
  padding: 18px 0;

  > svg {
    width: auto;
    height: 100%;
  }

  @media (${DEVICE.MIN_LG}) {
    width: 624px;
    height: 367px;
    margin-bottom: 0;
    margin-right: 32px;
    padding: 5px 0;
  }
`;

export default StyledWrapper;
