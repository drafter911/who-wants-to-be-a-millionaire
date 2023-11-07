import { TSixtagonSize, TSixtagonStatus, TLevelStatus } from 'app/types';

interface ISixtagonSizes {
  SMALL: TSixtagonSize;
  LARGE: TSixtagonSize
}

interface ISixtagonStatuses {
  INACTIVE: TSixtagonStatus;
  ACTIVE: TSixtagonStatus;
  DISABLED: TSixtagonStatus;
  CORRECT: TSixtagonStatus;
  SELECTED: TSixtagonStatus;
  WRONG: TSixtagonStatus;
  HOVERED: TSixtagonStatus;
}

interface ILevelStatuses {
  INACTIVE: TLevelStatus;
  ACTIVE: TLevelStatus;
  DISABLED: TLevelStatus;
}
export const SIXTAGON_SIZES: ISixtagonSizes = Object.freeze({
  SMALL: 'small',
  LARGE: 'large',
});

export const LEVEL_STATUSES: ILevelStatuses = Object.freeze({
  INACTIVE: 'inactive',
  ACTIVE: 'active',
  DISABLED: 'disabled',
});

export const SIXTAGON_STATUSES: ISixtagonStatuses = Object.freeze({
  INACTIVE: 'inactive',
  ACTIVE: 'active',
  DISABLED: 'disabled',
  CORRECT: 'correct',
  SELECTED: 'selected',
  WRONG: 'wrong',
  HOVERED: 'hovered',
});

export default { SIXTAGON_SIZES, SIXTAGON_STATUSES };
