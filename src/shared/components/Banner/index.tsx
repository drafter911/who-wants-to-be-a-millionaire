import React from 'react';
import { StyledWrapper } from './styled';
import BannerImage from './components/BannerImage';
import Content from './components/Content';
import ErrorMessage from '../ErrorMessage';

interface IBannerProps {
  image?: React.ReactNode;
  background?: string;
  title: string;
  subTitle?: string;
  buttonText: string;
  onButtonClick: () => void;
  errorMessage?: string;
}

function Banner({
  image, background, title, subTitle, buttonText, onButtonClick, errorMessage,
}: IBannerProps) {
  return (
    <StyledWrapper $background={background}>
      <BannerImage>
        {image}
      </BannerImage>
      <Content
        title={title}
        subTitle={subTitle}
        buttonText={buttonText}
        onButtonClick={onButtonClick}
      />
      {errorMessage && (
        <ErrorMessage errorMessage={errorMessage} />
      )}
    </StyledWrapper>
  );
}

Banner.defaultProps = {
  image: null,
  background: null,
  subTitle: null,
  errorMessage: null,
};

export default Banner;
