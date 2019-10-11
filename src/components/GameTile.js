import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Tile = styled.div`
  background: ${imageURL => `url(${imageURL.imageURL}) no-repeat center`};
  background-size: cover;
  height: 120px;
  width: 120px;
  border: 2px solid ${({ theme }) => theme.color.elements.label};
`;

const TopLabel = styled.div`
  border: 2px solid ${({ theme }) => theme.color.elements.label};
  border-bottom: none;
  color: ${({ theme }) => theme.color.elements.panel};
  text-align: center;
  padding: 2px;
  background-color: ${({ theme }) => theme.color.accent.primary};
  font-size: ${({ theme }) => theme.font.size.label.secondary};
  transition: ${({ theme }) => theme.transition.quick};
`;

const Wrapper = styled.div`
  margin: 10px;
  display: inline-block;
  cursor: pointer;

  &:hover {
    ${TopLabel} {
      background-color: ${({ theme }) => theme.color.accent.secondary};
    }
  }
`;

const GameTile = ({
  handleClick, gameID, title, imageURL, gameURL, ...rest
}) => (
  <Wrapper onClick={handleClick}>
    <TopLabel>{title}</TopLabel>
    <Tile imageURL={imageURL} {...rest} />
  </Wrapper>
);

GameTile.propTypes = {
  gameID: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  gameURL: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

GameTile.defaultProps = {
  imageURL: '',
  handleClick: () => false,
};

export default GameTile;
