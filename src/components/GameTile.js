import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  background: ${imageURL => `url(${imageURL.imageURL}) no-repeat center`};
  background-size: cover;
  height: 160px;
  width: 160px;
  border: 2px solid ${({ theme }) => theme.color.elements.label};
  padding: 20px;
  margin: 10px;
  display: inline-block;
`;

const GameTile = ({
  gameID, title, imageURL, gameURL, ...rest
}) => (
  <Wrapper imageURL={imageURL} {...rest}>{title}</Wrapper>
);

GameTile.propTypes = {
  gameID: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  gameURL: PropTypes.string.isRequired,
};

GameTile.defaultProps = {
  imageURL: '',
};

export default GameTile;
