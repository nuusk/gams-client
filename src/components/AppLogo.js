import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
  display: block;
  max-width: 100px;
  width: auto;
  height: auto;
  object-fit: contain;
`;

const AppLogo = () => (
  <LogoImage src="/images/gams-logo.png" />
);

export default AppLogo;
