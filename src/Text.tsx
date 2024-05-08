import {Text as TextRN} from 'react-native';

type TextProps = {
  text: string;
};

export const Text = ({text}: TextProps) => {
  return <TextRN>{text}</TextRN>;
};
