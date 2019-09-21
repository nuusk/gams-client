import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const AvatarLabel = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: ${({ theme }) => theme.font.size.label.secondary};
  opacity: 0.3;
  height: 20px;
  align-self: flex-end;
  justify-self: flex-end;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.color.accent.secondary};
  transition: opacity ${({ theme }) => theme.visuals.transition.quick};
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

  &:hover ${AvatarLabel} {
    opacity: 1;
  }

  ${({ onClick }) => onClick
    && css`
    cursor: pointer;
  `}

`;

const Avatar = ({ imageURL, labelText, ...rest }) => (
  <Wrapper imageURL={imageURL} {...rest}>
    <AvatarLabel>{labelText}</AvatarLabel>
  </Wrapper>
);

Avatar.propTypes = {
  imageURL: PropTypes.string,
  labelText: PropTypes.string,
};

Avatar.defaultProps = {
  imageURL: '',
  labelText: '',
};

export default Avatar;
