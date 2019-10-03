import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 1rem 0;
  transition: ${({ theme }) => theme.transition.base};

  .selected {
    color: ${({ theme }) => theme.color.accent.secondary};
  }
`;

const CustomNavLink = ({ to, children, ...rest }) => (
  <Wrapper>
    <NavLink activeClassName="selected" to={to} {...rest}>
      { children }
    </NavLink>
  </Wrapper>
);


CustomNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

CustomNavLink.defaultProps = {
  children: [],
};

export default CustomNavLink;
