import React from 'react';
import { render } from '@testing-library/react';

import ExportedComponent from './exported-component';

describe('ExportedComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExportedComponent />);
    expect(baseElement).toBeTruthy();
  });
});
