import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NativeSharedComponentsProps {}

const StyledNativeSharedComponents = styled.div`
  color: pink;
`;

export function NativeSharedComponents(props: NativeSharedComponentsProps) {
  return (
    <StyledNativeSharedComponents>
      <h1>Welcome to native-shared-components!</h1>
    </StyledNativeSharedComponents>
  );
}

export default NativeSharedComponents;
