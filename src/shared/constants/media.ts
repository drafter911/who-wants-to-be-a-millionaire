interface ISize {
  XS: string;
  SM: string;
  MD: string;
  LG: string;
  XL: string;
  XXL: string;
}

interface IDevice {
  MAX_XS: string;
  MIN_XS: string;
  MAX_SM: string;
  MIN_SM: string;
  MAX_MD: string;
  MIN_MD: string;
  MAX_LG: string;
  MIN_LG: string;
  MAX_XL: string;
  MIN_XL: string;
  MAX_XXL: string;
  MIN_XXL: string;
}

export const SIZE: ISize = Object.freeze({
  XS: '320px',
  SM: '640px',
  MD: '860px',
  LG: '1280px',
  XL: '1440px',
  XXL: '1920px',
});

export const DEVICE: IDevice = Object.freeze({
  MAX_XS: `(max-width: ${SIZE.XS})`,
  MIN_XS: `(min-width: ${SIZE.XS})`,
  MAX_SM: `(max-width: ${SIZE.SM})`,
  MIN_SM: `(min-width: ${SIZE.SM})`,
  MAX_MD: `(max-width: ${SIZE.MD})`,
  MIN_MD: `(min-width: ${SIZE.MD})`,
  MAX_LG: `(max-width: ${SIZE.LG})`,
  MIN_LG: `(min-width: ${SIZE.LG})`,
  MAX_XL: `(max-width: ${SIZE.XL})`,
  MIN_XL: `(min-width: ${SIZE.XL})`,
  MAX_XXL: `(max-width: ${SIZE.XXL})`,
  MIN_XXL: `(min-width: ${SIZE.XXL})`,
});

export default DEVICE;
