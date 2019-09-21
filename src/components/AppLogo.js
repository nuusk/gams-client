import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
  display: block;
  max-width: 140px;
  max-height: 140px;
  width: auto;
  height: auto;
`;

const AppLogo = () => (
  <LogoImage src="/images/gams-logo.png" />
);

export default AppLogo;
