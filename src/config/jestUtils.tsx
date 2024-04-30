import React from 'react';
import {ThemeProvider} from '../hooks/themeContext';
import {render} from '@testing-library/react-native';

type AllTheProvidersProps = {
  children: React.ReactNode;
};

const wrapper = ({children}: AllTheProvidersProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (ui: React.ReactElement, options = {}) => {
  return render(ui, {wrapper, ...options});
};

export * from '@testing-library/react-native';

export {customRender as render};
