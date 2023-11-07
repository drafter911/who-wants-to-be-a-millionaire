import React from 'react';
import { TLevelStatus } from 'app/types';
import { StyledWrapper } from './styled';
import SixtagonCover from '../../../../../../../../shared/components/SixtagonCover';
import Typography from '../../../../../../../../shared/components/Typography';
import { formatMoney } from '../../../../../../../../shared/utils';
import { useLevelValueColor } from './hooks';

interface ILevelProps {
  value: number;
  status: TLevelStatus ;
}

function Level({ value, status }: ILevelProps) {
  const fontColor: string = useLevelValueColor(status);
  return (
    <StyledWrapper>
      <SixtagonCover status={status} size="small" noHover>
        <Typography.Text fontSize="20px" align="center" width="100%" color={fontColor}>
          {formatMoney(value)}
        </Typography.Text>
      </SixtagonCover>
    </StyledWrapper>
  );
}

export default Level;
