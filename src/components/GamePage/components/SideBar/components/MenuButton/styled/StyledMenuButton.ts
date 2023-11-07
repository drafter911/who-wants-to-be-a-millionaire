import styled from 'styled-components';

export const StyledMenuButton = styled.button.attrs({ type: 'button' })`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  z-index: 1000;
`;

export default StyledMenuButton;
