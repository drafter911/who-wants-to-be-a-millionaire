import React from 'react';
import Title, { ITitleProps } from './components/Title';
import Text, { ITextProps } from './components/Text';

interface ITypography {
  Title: React.FC<ITitleProps>;
  Text: React.FC<ITextProps>;
}

const Typography: ITypography = {
  Title,
  Text,
};

export default Typography;
