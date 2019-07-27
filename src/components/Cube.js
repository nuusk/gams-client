import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const CubeWrapper = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-200px);
  transition: transform ${({ theme }) => theme.visuals.transition.slow};
  display: flex;
  justify-content: center;

  // every side
  & > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 400px;
    height: 400px;
    border: 2px solid ${({ theme }) => theme.color.accent.primary};
    padding: 40px;
    box-sizing: border-box;
    text-align: center;
    opacity: 0.1;
    transition: opacity ${({ theme }) => theme.visuals.transition.base};
  }

  // front
  & > *:nth-child(1) {
    transform: rotateY(  0deg) translateZ(200px);
  }

  // right
  & > *:nth-child(2) {
    transform: rotateY( 90deg) translateZ(200px);
  }

  // back
  & > *:nth-child(3) {
    transform: rotateY(180deg) translateZ(200px);
  }

  // left
  & > *:nth-child(4) {
    transform: rotateY(-90deg) translateZ(200px);
  }

  ${({ front }) => front
    && css`
    transform: translateZ(-200px) rotateY(0deg);

    & > *:nth-child(1) {
      opacity: 1;
    }
  `}

  ${({ right }) => right
    && css`
    transform: translateZ(-200px) rotateY(-90deg);

    & > *:nth-child(2) {
      opacity: 1;
    }
  `}

  ${({ back }) => back
    && css`
     transform: translateZ(-200px) rotateY(-180deg);

     & > *:nth-child(3) {
      opacity: 1;
    }
  `}

  ${({ left }) => left
    && css`
     transform: translateZ(-200px) rotateY(90deg);

     & > *:nth-child(4) {
      opacity: 1;
    }
  `}

`;

const Cube = ({ children, step }) => (
  <CubeWrapper
    front={step % 4 === 0}
    right={step % 4 === 1}
    back={step % 4 === 2}
    left={step % 4 === 3}
  >
    {children}
  </CubeWrapper>
);

Cube.propTypes = {
  step: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Cube.defaultProps = {
  step: 0,
  children: [],
};

export default Cube;
