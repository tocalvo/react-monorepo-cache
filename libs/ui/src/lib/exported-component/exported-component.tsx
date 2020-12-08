import React from 'react';

import './exported-component.styl';

/* eslint-disable-next-line */
export interface ExportedComponentProps {}

export function ExportedComponent(props: ExportedComponentProps) {
  return (
    <div>
      <h1>Welcome to exported-component!</h1>
    </div>
  );
}

export default ExportedComponent;
