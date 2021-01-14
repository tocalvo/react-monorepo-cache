import React from 'react';
import { render } from '@testing-library/react';

import NativeLib from './native-lib';

describe('NativeLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NativeLib />);
    expect(baseElement).toBeTruthy();
  });
});
