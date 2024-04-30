import React from 'react';
import {Home} from '../index';
import {render as NativeRender} from '@testing-library/react-native';
import {render} from '../../../config/jestUtils';
import {Text, TouchableOpacity} from 'react-native';

describe('integrated - Home', () => {
  it('integrated - should renders the Home component', () => {
    const {getByText} = render(<Home />);

    const textElement = getByText('Teste');
    const buttonElement = getByText('Salvar');

    expect(textElement).toBeTruthy();
    expect(buttonElement).toBeTruthy();
  });

  it('should renders the Home component', () => {
    const {getByText} = NativeRender(<Home />);

    const textElement = getByText('Teste');
    const buttonElement = getByText('Salvar');

    expect(textElement).toBeTruthy();
    expect(buttonElement).toBeTruthy();
  });
});

const mockComponent = () => {
  ({children}: any) => <Text>123{children}</Text>;
};

describe('unit - Home', () => {
  it('unit - should renders the Home component', () => {
    jest.mock('../../../components', () => ({
      Text: () => mockComponent(),
    }));

    const {getByText} = NativeRender(<Home />);

    const textElement = getByText('Teste');
    const buttonElement = getByText('Salvar');

    expect(textElement).toBeTruthy();
    expect(buttonElement).toBeTruthy();
  });
});
