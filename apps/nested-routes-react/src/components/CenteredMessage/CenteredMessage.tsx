import React from 'react';
import { CenteredContainer } from '../Containers';

export const CenteredMessage: React.FC = ({ children }) => {
  return (
    <CenteredContainer className="p-3">
      <h1>{children}</h1>
    </CenteredContainer>
  );
};
