import {TextInput} from 'react-native';

type InputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  testID?: string;
};

export const Input = ({label, value, onChangeText, testID}: InputProps) => {
  return (
    <TextInput value={value} onChangeText={onChangeText} testID={testID} />
  );
};
