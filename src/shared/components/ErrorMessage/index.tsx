import React from 'react';
import { useTheme } from 'styled-components';
import Typography from '../Typography';

interface IErrorMessageProps {
  errorMessage: string

}

function ErrorMessage({ errorMessage }: IErrorMessageProps) {
  const theme = useTheme();
  return (
    <Typography.Text
      color={theme.colors.warning}
      fontWeight={600}
      align="center"
    >
      {errorMessage}
    </Typography.Text>
  );
}

export default ErrorMessage;
