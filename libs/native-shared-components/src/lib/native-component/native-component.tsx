import React from 'react';

import styled from 'styled-components/native';

/* eslint-disable-next-line */
export interface NativeComponentProps { }

const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: pink;
`;

export function NativeComponent(props: NativeComponentProps) {
  return (
    <StyledView>
      <StyledText>Native-component with text</StyledText>
    </StyledView>
  );
}

export default NativeComponent;

