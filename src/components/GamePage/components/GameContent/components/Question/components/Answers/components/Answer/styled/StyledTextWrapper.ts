import styled from 'styled-components';

export const StyledTextWrapper = styled.div`
  > * {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default StyledTextWrapper;
