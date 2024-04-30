import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext, useTheme} from '../../hooks/themeContext';
import {Button, Text} from '../../components';
import {Colors, Weight} from '../../theme/types';
import {ButtonVariants} from '../../components/Button/ButtonBackground/types';

export const Home = () => {
  const {changeTheme} = useContext(ThemeContext);
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        width: '100%',
        height: '100%',
      }}>
      <View
        style={{
          padding: theme.sizes.h4,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text weight={Weight.bold} color={Colors.error}>
          Teste
        </Text>
        <Button
          onPress={changeTheme}
          variant={ButtonVariants.outlined}
          color={Colors.primary}
          text="Salvar"
          textColor={Colors.primary}
          textWigth={Weight.bold}
        />
      </View>
    </View>
  );
};
