import {Button as ButtonRN} from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
  testID?: string;
};

export const Button = ({title, onPress, testID}: ButtonProps) => {
  return <ButtonRN title={title} onPress={onPress} testID={testID} />;
};
