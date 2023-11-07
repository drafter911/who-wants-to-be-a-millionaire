import React from 'react';
import { TSixtagonSize } from 'app/types';
import { useIsMobile } from '../../../hooks';
import { ReactComponent as SixtagonIconLargeDesktop } from '../../../../assets/images/svg/sixtagonLargeDesktop.svg';
import { ReactComponent as SixtagonIconLargeMobile } from '../../../../assets/images/svg/sixtagonLargeMobile.svg';
import { ReactComponent as SixtagonIconSmallDesktop } from '../../../../assets/images/svg/sixtagonSmallDesktop.svg';
import { ReactComponent as SixtagonIconSmallMobile } from '../../../../assets/images/svg/sixtagonSmallMobile.svg';
import { SIXTAGON_SIZES } from '../../../constants';

export const useSixtagonIcon = (size: TSixtagonSize): React.FC => {
  const isMobile: boolean = useIsMobile(1080);
  if (size === SIXTAGON_SIZES.SMALL) {
    return isMobile ? SixtagonIconSmallMobile : SixtagonIconSmallDesktop as React.FC;
  }
  return isMobile ? SixtagonIconLargeMobile : SixtagonIconLargeDesktop as React.FC;
};

export default useSixtagonIcon;
