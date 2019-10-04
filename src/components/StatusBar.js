import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  // border: 2px solid ${({ theme }) => theme.color.elements.label};
  background-color: ${({ theme }) => theme.color.palette.kiwi};
`;

const StatusCode = styled.div`
  margin-left: 10px;
`;

const Wrapper = styled.div`
  padding: 10px;
  width: 160px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const StatusBar = () => (
  <Wrapper>
    <Circle />
    <StatusCode>online</StatusCode>
  </Wrapper>
);

export default StatusBar;
