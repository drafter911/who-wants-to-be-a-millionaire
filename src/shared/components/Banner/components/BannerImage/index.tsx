import React from 'react';
import { StyledWrapper } from './styled';
import { ReactComponent as ThumbsUp } from '../../../../../assets/images/svg/thubsUp.svg';

interface IBannerImageProps {
  children: React.ReactNode | null;
}

function BannerImage({ children = null }: IBannerImageProps) {
  return <StyledWrapper>{children || <ThumbsUp />}</StyledWrapper>;
}

export default BannerImage;
