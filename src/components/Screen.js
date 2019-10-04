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
  box-sizing: border-box;

  // left sidebar
  > *:nth-child(1) {
    flex-basis: 200px;
  }

  // main content, between sidebars
  > *:nth-child(2) {
  }

  // right sidebar
  > *:nth-child(3) {
    flex-basis: 200px;
  }
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
