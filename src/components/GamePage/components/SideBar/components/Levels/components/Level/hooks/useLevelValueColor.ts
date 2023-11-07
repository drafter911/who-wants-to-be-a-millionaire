import { useTheme } from 'styled-components';
import { TLevelStatus } from 'app/types';
import { LEVEL_STATUSES } from '../../../../../../../../../shared/constants';

export const useLevelValueColor = (status: TLevelStatus): string => {
  const theme = useTheme();
  switch (status) {
    case LEVEL_STATUSES.ACTIVE:
      return theme.colors.main;
    case LEVEL_STATUSES.DISABLED:
      return theme.colors.base;
    case LEVEL_STATUSES.INACTIVE:
    default:
      return theme.colors.baseDark;
  }
};

export default useLevelValueColor;
