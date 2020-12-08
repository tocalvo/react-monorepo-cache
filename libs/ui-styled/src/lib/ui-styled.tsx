import React from 'react';

import styled from 'styled-components/native';

/* eslint-disable-next-line */
export interface UiStyledProps {}

const StyledUiStyled = styled.View`
  color: pink;
`;

const StyledText = styled.Text`
  color: palevioletred;
`

export function UiStyled(props: UiStyledProps) {
  return (
    <StyledUiStyled>
      <StyledText>Welcome to ui-styled!</StyledText>
    </StyledUiStyled>
  );
}

export default UiStyled;
