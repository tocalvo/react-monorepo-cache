import React from 'react';


import styled from 'styled-components/native'

/* eslint-disable-next-line */
export interface ExportedComponentStyledProps {}

const StyledExportedComponentStyled = styled.View`
  color: pink;
`;
const StyledText = styled.Text`
  color: palevioletred;
`

export function ExportedComponentStyled(props: ExportedComponentStyledProps) {
  return (
    <StyledExportedComponentStyled>
      <StyledText>Welcome to exported-component-styled! patata!</StyledText>
    </StyledExportedComponentStyled>
  );
}

export default ExportedComponentStyled;
