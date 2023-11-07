import styled, { css, Interpolation } from 'styled-components';
import { TSixtagonStatus } from 'app/types';
import { SIXTAGON_STATUSES } from '../../../constants';

interface IStyledSixtagonProps {
  $status?: TSixtagonStatus;
  $noHover: boolean;
}

const inactiveStyles = css`
  --sixtagon-background: ${(props) => props.theme.colors.baseLightest};
  --sixtagon-border: ${(props) => props.theme.colors.base};
`;
const activeStyles = css`
  --sixtagon-background: ${(props) => props.theme.colors.baseLightest};
  --sixtagon-border: ${(props) => props.theme.colors.main};
`;

const correctStyles = css`
  --sixtagon-background: ${(props) => props.theme.colors.successLighter};
  --sixtagon-border: ${(props) => props.theme.colors.success};
`;

const selectedStyles = css`
  --sixtagon-background: ${(props) => props.theme.colors.mainLighter};
  --sixtagon-border: ${(props) => props.theme.colors.main};
`;

const wrongStyles = css`
  --sixtagon-background: ${(props) => props.theme.colors.warningLighter};
  --sixtagon-border: ${(props) => props.theme.colors.warning};
`;

const disabledStyles = css`
  --sixtagon-background: ${(props) => props.theme.colors.baseLightest};
  --sixtagon-border: ${(props) => props.theme.colors.base};
`;

const hoveredStyles = css`
  --sixtagon-background: ${(props) => props.theme.colors.baseLightest};
  --sixtagon-border: ${(props) => props.theme.colors.main};
`;

const getSixtagonStylesByStatus = (props: IStyledSixtagonProps):
Interpolation<IStyledSixtagonProps> => {
  switch (props.$status) {
    case SIXTAGON_STATUSES.ACTIVE:
      return activeStyles;
    case SIXTAGON_STATUSES.CORRECT:
      return correctStyles;
    case SIXTAGON_STATUSES.SELECTED:
      return selectedStyles;
    case SIXTAGON_STATUSES.WRONG:
      return wrongStyles;
    case SIXTAGON_STATUSES.DISABLED:
      return disabledStyles;
    case SIXTAGON_STATUSES.HOVERED:
      return hoveredStyles;
    case SIXTAGON_STATUSES.INACTIVE:
    default:
      return inactiveStyles;
  }
};

export const StyledWrapper = styled.div<IStyledSixtagonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  ${getSixtagonStylesByStatus};

  ${(props) => props.$status === 'inactive' && !props.$noHover && css`
    &:hover {
      cursor: pointer;
      ${hoveredStyles};
    }
  `};
`;

export default StyledWrapper;
