import styled from 'styled-components';
import { TSixtagonSize } from 'app/types';

interface IStyledContentWrapperProps {
  $size?: TSixtagonSize;
}

export const StyledContentWrapper = styled.div<IStyledContentWrapperProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
    align-items: center;
  padding: ${(props) => (props.$size === 'small' ? '8px 24px' : '24.5px 32px')};
  z-index: 1;
`;

export default StyledContentWrapper;
