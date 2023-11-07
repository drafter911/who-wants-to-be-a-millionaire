import React from 'react';
import Typography from '../../../Typography';
import { StyledWrapper } from './styled';
import Button from '../../../Button';
import { useIsMobile } from '../../../../hooks';

interface IContentProps {
  title: string;
  subTitle?: string;
  buttonText: string;
  onButtonClick: () => void;
}

function Content({
  title, subTitle, buttonText, onButtonClick,
}: IContentProps) {
  const isMobile: boolean = useIsMobile(1280);

  return (
    <StyledWrapper>
      <div>
        {
              subTitle && (
              <Typography.Title
                level={2}
                align={isMobile ? 'center' : 'left'}
                margin={isMobile ? 0 : '0 0 8px'}
                opacity={0.5}
              >
                {subTitle}
              </Typography.Title>
              )
          }
        <Typography.Title
          align={isMobile ? 'center' : 'left'}
          margin={isMobile ? 0 : '0 0 64px'}
        >
          {title}
        </Typography.Title>
      </div>
      <Button
        width={isMobile ? '100%' : '296px'}
        onClick={onButtonClick}
        type="button"
      >
        {buttonText}
      </Button>
    </StyledWrapper>
  );
}

Content.defaultProps = {
  subTitle: null,
};

export default Content;
