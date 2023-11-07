import styled from 'styled-components';
import { DEVICE } from '../../../../../../../shared/constants';

export const StyledQuestionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 46%;
  max-height: 46%;
  width: 100%;
  padding: 16px;
  
  > * {
    max-height: 100%;
    overflow-y: auto;
  }

  @media (${DEVICE.MIN_MD}) {
    align-items: center;
    justify-content: flex-start;
  }
  
  @media (${DEVICE.MIN_LG}) { 
    align-items: flex-start;
  }
`;

export default StyledQuestionTextWrapper;
