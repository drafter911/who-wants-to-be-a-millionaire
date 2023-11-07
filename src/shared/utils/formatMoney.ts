import { roundToLocaleString } from './roundToLocaleString';

export const formatMoney = (value: number, currencySymbol: string = '$'): string => `${currencySymbol}${roundToLocaleString(value, 0)}`;

export default formatMoney;
