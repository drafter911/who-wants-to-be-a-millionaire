import React from 'react';
import styledComponents from './styled';

export interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  width?: string;
}

const { StyledButton } = styledComponents;

function Button({ children, onClick, width = 'auto' }: IButtonProps) {
  return <StyledButton onClick={onClick} $width={width}>{children}</StyledButton>;
}

Button.defaultProps = {
  width: 'auto',
};

export default Button;
