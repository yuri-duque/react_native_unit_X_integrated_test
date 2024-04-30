import React from 'react';
import {render} from '@testing-library/react-native';
import {Text} from '../index';
import {Colors, Sizes, Weight} from '../../../theme/types';

jest.mock('../../../hooks/themeContext', () => ({
  useTheme: () => ({
    colors: {
      error: 'red',
    },
    sizes: {
      h1: 16,
    },
    weight: {
      bold: 'bold',
    },
  }),
}));

describe('Text component', () => {
  it('renders the text correctly', () => {
    const {getByText} = render(<Text>Hello, World!</Text>);
    const textElement = getByText('Hello, World!');
    expect(textElement).toBeDefined();
  });

  it('applies the correct styles', () => {
    const {getByText} = render(
      <Text color={Colors.error} size={Sizes.h1} weight={Weight.bold}>
        Styled Text
      </Text>,
    );
    const textElement = getByText('Styled Text');
    expect(textElement.props.style.color).toEqual('red');
    expect(textElement.props.style.fontSize).toEqual(16);
    expect(textElement.props.style.fontWeight).toEqual('bold');
  });
});
