import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 80px;

`;

const Wall = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    {children}
  </Wrapper>
);

Wall.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Wall.defaultProps = {
  children: [],
};

export default Wall;
