export const roundToLocaleString = (value: number, maxDigits: number = 0, locale: string = 'en-US'): string => {
  const toLocaleStringOptions = {
    minimumFractionDigits: maxDigits,
    maximumFractionDigits: maxDigits,
  };

  return Number(value).toLocaleString(locale, toLocaleStringOptions).replace(/,$/, '.');
};

export default roundToLocaleString;
