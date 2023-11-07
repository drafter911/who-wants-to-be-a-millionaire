import styled, { IDefaultTheme } from 'styled-components';
import { TSixtagonStatus } from 'app/types';
import { SIXTAGON_STATUSES } from '../../../constants';

interface IStyledSideLineProps {
  theme: IDefaultTheme;
  $status?: TSixtagonStatus;
  $hovered: boolean;
}

const getBackgroundColor = (props: IStyledSideLineProps): string => {
  if (props.$hovered && props.$status === SIXTAGON_STATUSES.INACTIVE) {
    return props.theme.colors.main;
  }

  switch (props.$status) {
    case SIXTAGON_STATUSES.ACTIVE:
      return props.theme.colors.main;
    case SIXTAGON_STATUSES.CORRECT:
      return props.theme.colors.success;
    case SIXTAGON_STATUSES.SELECTED:
      return props.theme.colors.main;
    case SIXTAGON_STATUSES.WRONG:
      return props.theme.colors.warning;
    case SIXTAGON_STATUSES.DISABLED:
      return props.theme.colors.base;
    case SIXTAGON_STATUSES.HOVERED:
      return props.theme.colors.main;
    case SIXTAGON_STATUSES.INACTIVE:
    default:
      return props.theme.colors.base;
  }
};

export const StyledSideLine = styled.div<IStyledSideLineProps>`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  transform: translateY(-50%);
  background-color: ${getBackgroundColor};

`;

export default StyledSideLine;
