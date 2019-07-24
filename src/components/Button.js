import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.button`
  max-width: 200px;
  width: 100%;
  margin: 1rem 0;
  padding: 0 1rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  outline: none;
  transform-origin: bottom;
  -webkit-transform-style: preserve-3d;
  transition: transform ${({ theme }) => theme.visuals.transition.base};

  &::after {
    transition: ${({ theme }) => theme.visuals.transition.quick};
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: -100%;
  }

  &:hover {
    &::after {
      right: 0;
    }
  }

  &:active {
    transform: rotate3d(1, 0, 0, -180deg);
    transition:
      transform ${({ theme }) => theme.visuals.transition.base},
      opacity ${({ theme }) => theme.visuals.transition.slow};
    opacity: 0;
  }

  ${({ primary }) => primary
    && css`
    background-color: ${({ theme }) => theme.color.accent.primary};
    color: ${({ theme }) => theme.color.background.base}

    &::after {
      background-color: ${({ theme }) => theme.color.accent.secondary};
    }

    &:hover {
      color: ${({ theme }) => theme.color.accent.primary};
    }
  `}
`;

const ButtonText = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.visuals.zindex.front}
  transition: ${({ theme }) => theme.visuals.transition.quick}
`;

const Button = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    <ButtonText>
      {children}
    </ButtonText>
  </Wrapper>
);

Button.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Button.defaultProps = {
  primary: true,
  children: [],
};

export default Button;
