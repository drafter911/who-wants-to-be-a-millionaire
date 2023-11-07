import React from 'react';
import { useTheme } from 'styled-components';
import { TSixtagonStatus } from 'app/types';
import SixtagonCover from '../../../../../../../../../../shared/components/SixtagonCover';
import { StyledButton, StyledTextWrapper } from './styled';
import Typography from '../../../../../../../../../../shared/components/Typography';
import { convertNumberToLetter } from '../../utils';
import { useIsMobile } from '../../../../../../../../../../shared/hooks';

interface IAnswerProps {
  sequenceNumber: number;
  text: string;
  status:TSixtagonStatus;
  onClick: (answerId: string) => void;
}

function Answer({
  sequenceNumber, text, status, onClick,
}:IAnswerProps) {
  const theme = useTheme();
  const isMobile: boolean = useIsMobile(1080);
  return (
    <StyledButton onClick={onClick}>
      <SixtagonCover
        status={status}
      >
        <Typography.Text as="span" fontSize={isMobile ? '14px' : '20px'} fontWeight="bold" color={theme.colors.main} margin="0 8px 0 0">
          {convertNumberToLetter(sequenceNumber)}
        </Typography.Text>
        <StyledTextWrapper>
          <Typography.Text as="span" fontSize={isMobile ? '14px' : '20px'} title={text}>
            {text}
          </Typography.Text>
        </StyledTextWrapper>
      </SixtagonCover>
    </StyledButton>
  );
}

export default Answer;
