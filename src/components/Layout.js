import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background.base};
  height: 100vh;

  ${({ columned }) => columned
    && css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const Layout = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    {children}
  </Wrapper>
);

Layout.propTypes = {
  columned: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Layout.defaultProps = {
  columned: false,
  children: [],
};

export default Layout;
