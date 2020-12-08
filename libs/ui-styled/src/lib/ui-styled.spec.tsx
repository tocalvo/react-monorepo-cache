import React from 'react';
import { render } from '@testing-library/react';

import UiStyled from './ui-styled';

describe('UiStyled', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiStyled />);
    expect(baseElement).toBeTruthy();
  });
});
