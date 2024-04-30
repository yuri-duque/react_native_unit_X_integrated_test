import React from 'react';
import {Text} from '../index';
import {Colors, Sizes, Weight} from '../../../theme/types';
import {render} from '../../../config/jestUtils';

describe('Text component', () => {
  it('integrated - should renders the text correctly', () => {
    const {getByText} = render(<Text>Hello, World!</Text>);
    const textElement = getByText('Hello, World!');
    expect(textElement).toBeDefined();
  });

  it('integrated - should applies the correct styles', () => {
    const {getByText} = render(
      <Text color={Colors.error} size={Sizes.h1} weight={Weight.bold}>
        Styled Text
      </Text>,
    );

    const textElement = getByText('Styled Text');
    expect(textElement.props.style.color).toEqual('#eb0014');
    expect(textElement.props.style.fontSize).toEqual(44);
    expect(textElement.props.style.fontWeight).toEqual('bold');
  });
});
