import { useScreenWith } from './useScreenWith';

export const useIsMobile = (breakpointWidth: number = 1440): boolean => {
  const screenWith: number = useScreenWith();
  return screenWith < breakpointWidth;
};

export default useIsMobile;
