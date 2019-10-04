import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const TopLabel = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: ${({ theme }) => theme.font.size.label.secondary};
  height: 20px;
  align-self: flex-end;
  justify-self: flex-end;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.color.accent.secondary};
  transition: opacity ${({ theme }) => theme.transition.quick};

  ${({ onClick }) => onClick
    && css`
    opacity: 0.3;
  `}
`;

const BottomLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: ${({ theme }) => theme.font.size.label.base};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  height: 20px;
  bottom: -40px;
  width: 186px;
  margin: -10px auto 10px;
  padding: 4px 0;
  border: 2px solid ${({ theme }) => theme.color.elements.label};
  border-top: none;
  background-color: ${({ theme }) => theme.color.accent.secondary};
  color: ${({ theme }) => theme.color.elements.panel};
`;

const Wrapper = styled.div`
  background: ${imageURL => `url(${imageURL.imageURL}) no-repeat center`};
  background-size: contain;
  background-position: bottom;
  height: 160px;
  width: 160px;
  border: 2px solid white;
  padding: 20px;
  margin: 10px;
  display: inline-block;
  position: relative;

  &:hover ${TopLabel} {
    opacity: 1;
  }

  ${({ onClick }) => onClick
    && css`
    cursor: pointer;
  `}
`;

const Avatar = ({ imageURL, topLabel, bottomLabel, ...rest }) => (
  <>
    <Wrapper imageURL={imageURL} {...rest}>
      {topLabel && <TopLabel>{topLabel}</TopLabel>}
    </Wrapper>
    {bottomLabel && (
      <BottomLabel>
        <span>
          {bottomLabel}
        </span>
      </BottomLabel>
    )}
  </>
);

Avatar.propTypes = {
  imageURL: PropTypes.string,
  topLabel: PropTypes.string,
  bottomLabel: PropTypes.string,
};

Avatar.defaultProps = {
  imageURL: '',
  topLabel: '',
  bottomLabel: '',
};

export default Avatar;
