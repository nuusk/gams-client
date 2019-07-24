import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background.far};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;

  ${({ columned }) => columned
    && css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `}

${({ narrow }) => narrow
    && css`
    max-width: ${({ theme }) => theme.size.screen.narrow}
  `}
`;

const Layout = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    <Content {...rest}>
      {children}
    </Content>
  </Wrapper>
);

Layout.propTypes = {
  columned: PropTypes.bool,
  narrow: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Layout.defaultProps = {
  columned: false,
  narrow: false,
  children: [],
};

export default Layout;
