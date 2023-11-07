import React from 'react';
import { StyledWrapper } from './styled';
import Typography from '../Typography';

interface ILoaderProps {
  text: React.ReactNode
}

function Loader({ text }: ILoaderProps) {
  return (
    <StyledWrapper>
      <Typography.Title level={2} align="center">{text}</Typography.Title>
    </StyledWrapper>
  );
}

export default Loader;
