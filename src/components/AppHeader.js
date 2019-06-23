import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  font-family: ${({ theme }) => theme.font.family.special};
  text-align: center;
`;

const AppHeader = () => (
  <Wrapper>GamS</Wrapper>
);

export default AppHeader;
