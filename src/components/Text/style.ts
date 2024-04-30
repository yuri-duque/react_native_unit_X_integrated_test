import {StyleSheet} from 'react-native';
import {TextStyleProps} from './type';
import {useTheme} from '../../hooks/themeContext';
import {Weight} from '../../theme/types';

export const TextStyle = ({color, size, weight}: TextStyleProps) => {
  const theme = useTheme();

  return StyleSheet.create({
    text: {
      color: color ? theme.colors[color] : theme.colors.text,
      fontSize: size ? theme.sizes[size] : theme.sizes.text,
      fontWeight: weight ?? Weight.normal,
    },
  });
};
