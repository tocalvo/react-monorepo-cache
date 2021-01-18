import React from 'react';
import { render } from '@testing-library/react';

import NativeSharedComponents from './native-shared-components';

describe('NativeSharedComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NativeSharedComponents />);
    expect(baseElement).toBeTruthy();
  });
});
