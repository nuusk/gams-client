import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AppLogo from './AppLogo';

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const Sidebar = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    <AppLogo />
  </Wrapper>
);

Sidebar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Sidebar.defaultProps = {
  children: [],
};

export default Sidebar;
