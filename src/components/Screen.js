import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  padding: 0 2rem;
  box-sizing: border-box;
  border: 2px solid white;

  // left sidebar
  > *:nth-child(1) {
    border: 2px solid red;
    flex-basis: 200px;
  }

  // main content, between sidebars
  > *:nth-child(2) {
    border: 2px solid blue;
  }

  // right sidebar
  > *:nth-child(3) {
    border: 2px solid green;
    flex-basis: 200px;
  }
`;

const Screen1 = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 ${({ theme }) => theme.size.gap};
  // border: ${({ theme }) => theme.size.border} solid ${({ theme }) => theme.color.elements.line};
  border-radius: ${({ theme }) => theme.size.borderRadius}
  box-sizing: border-box;
  background: ${({ theme }) => theme.color.background.base}
`;

const Sidebar = styled.div`
  width: 200px;
  height: 100%;
`;

const Screen = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    {children}
  </Wrapper>
);

Screen.propTypes = {
  sidebars: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Screen.defaultProps = {
  sidebars: true,
  children: [],
};

export default Screen;
