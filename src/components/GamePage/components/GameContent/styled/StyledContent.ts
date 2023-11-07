import styled from 'styled-components';
import { DEVICE } from '../../../../../shared/constants';

export const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1064px;
  margin: 0 auto;
  
  @media(${DEVICE.MIN_MD}) {
    max-height: 900px;
  }
`;

export default StyledContent;
