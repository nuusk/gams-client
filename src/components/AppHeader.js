import React from 'react';
import styled from 'styled-components';
import AppLogo from './AppLogo';

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const AppHeader = ({ ...rest }) => (
  <Wrapper {...rest}>
    <AppLogo />
  </Wrapper>
);

export default AppHeader;
