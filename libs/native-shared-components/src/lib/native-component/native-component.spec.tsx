import React from 'react';
import { render } from '@testing-library/react';

import NativeComponent from './native-component';

describe('NativeComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NativeComponent />);
    expect(baseElement).toBeTruthy();
  });
});
