import React from 'react';
import { render } from '@testing-library/react';

import ExportedComponentStyled from './exported-component-styled';

describe('ExportedComponentStyled', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExportedComponentStyled />);
    expect(baseElement).toBeTruthy();
  });
});
