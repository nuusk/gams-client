import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Arrow = styled.div`
  width: 20px;
  height: 20px;
  transform: rotate(225deg);
  padding: 0;
  border: 3px solid ${({ theme }) => theme.color.accent.primary};
  border-right: none;
  border-top: none;
  cursor: pointer;
  display: inline-block;
  transition: ${({ theme }) => theme.transition.base};

  ${({ secondary }) => secondary
    && css`
    border-color: ${({ theme }) => theme.color.accent.secondary};

    &:hover {
      border-color: ${({ theme }) => theme.color.accent.primary};
    }
  `}

  ${({ left }) => left
    && css`
    transform: rotate(45deg);
  `}

  ${({ absoluteLeft }) => absoluteLeft
    && css`
    position: absolute;
    top: 50%;
    left: -40px;
    transform: translateY(-50%) rotate(45deg);
    animation: wiggle ${({ theme }) => theme.transition.slow} infinite;

    @media ${({ theme }) => theme.devices.mobile} {
      transform: translate(50px, 0px) rotate(45deg);
    }
  `}

  @keyframes wiggle {
    0% {
      left: -40px;
    }
    50% {
      left: -35px;
    }
    100% {
      left: -40px;
    }
  }
`;

Arrow.propTypes = {
  right: PropTypes.bool,
  left: PropTypes.bool,
  absoluteLeft: PropTypes.bool,
  secondary: PropTypes.bool,
};

Arrow.defaultProps = {
  right: true,
  left: false,
  absoluteLeft: false,
  secondary: false,
};

export default Arrow;
