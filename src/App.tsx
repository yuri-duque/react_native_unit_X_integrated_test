import React from 'react';
import {View} from 'react-native';
import {Input} from './Input';
import {Button} from './Button';
import {login} from './loginService';
import {Text} from './Text';

function App() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState<string>();

  const handleLogin = () => {
    if (!email || !password) {
      setError('Por favor preencha todos os campos');
      return;
    }

    setError(undefined);
    login(email, password);
  };

  return (
    <View>
      <Input
        label="Email"
        value="test"
        onChangeText={setEmail}
        testID="input-email"
      />
      <Input
        label="Password"
        value="test"
        onChangeText={setPassword}
        testID="input-password"
      />
      {error && <Text text={error} />}
      <Button title="Login" onPress={handleLogin} testID="btn-login" />
    </View>
  );
}

export default App;
