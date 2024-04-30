import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from './hooks/themeContext';
import {Home} from './pages/Home';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
