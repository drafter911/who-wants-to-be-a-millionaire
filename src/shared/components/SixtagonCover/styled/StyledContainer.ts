import styled from 'styled-components';

interface IStyledContainerProps {
  $height?: string;
  $padding?: string;
}

export const StyledContainer = styled.div<IStyledContainerProps>`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default StyledContainer;
