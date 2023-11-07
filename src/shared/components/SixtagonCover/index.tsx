import React from 'react';
import { TSixtagonStatus, TSixtagonSize } from 'app/types';
import {
  StyledContainer, StyledSideLine, StyledWrapper, StyledContentWrapper,
} from './styled';
import { SIXTAGON_SIZES } from '../../constants';
import { useSixtagonIcon } from './hooks';

interface ISixtagonCoverProps {
  children?: React.ReactNode;
  status: TSixtagonStatus;
  size?: TSixtagonSize;
  noHover?: boolean;
}

function SixtagonCover({
  status, children, size, noHover = false,
}: ISixtagonCoverProps) {
  const [hovered, setHovered] = React.useState<boolean>(false);
  const Sixtagon: React.FC = useSixtagonIcon(size!);

  const handleHover = (isHovered: boolean) => {
    if (noHover) return setHovered(false);
    return setHovered(isHovered);
  };

  return (
    <StyledContainer
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      onTouchStart={() => handleHover(true)}
      onTouchEnd={() => handleHover(false)}
    >
      <StyledSideLine $status={status} $hovered={hovered} />
      <StyledWrapper $status={status} $noHover={noHover}>
        <Sixtagon />
        <StyledContentWrapper $size={size}>
          {children}
        </StyledContentWrapper>
      </StyledWrapper>
    </StyledContainer>
  );
}

SixtagonCover.defaultProps = {
  children: null,
  size: SIXTAGON_SIZES.LARGE,
  noHover: false,
};

export default SixtagonCover;
