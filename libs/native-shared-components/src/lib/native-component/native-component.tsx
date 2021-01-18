import React from 'react';
import { Text, View } from 'react-native';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NativeComponentProps { }

const StyledNativeComponent = styled.p`
  color: pink;
`;

export function NativeComponent(props: NativeComponentProps) {
  return (
    <StyledNativeComponent>
      <Text>Native-component with text</Text>
    </StyledNativeComponent>
  );
}

export default NativeComponent;

