import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.visuals.zindex.front};
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  background-color: ${({ theme }) => theme.color.background.far};
`;

const Tile = styled.div`
  background: ${imageURL => `url(${imageURL.imageURL}) no-repeat center`};
  border: 2px solid white;
  background-size: contain;
  background-posiion: bottom;
  display: inline-block;
  transition: ${({ theme }) => theme.visuals.transition.quick};
  position: relative;
  cursor: pointer;
  &::after {
    transition: ${({ theme }) => theme.visuals.transition.quick};
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.color.background.base};
    opacity: 0.4;
  }

  &:hover {
    &::after {
      opacity: 0;
    }
  }
`;

const SelectionPopup = ({ items, chooseAvatar }) => (
  <Wrapper>
    {items.map(item => (
      <Tile
        onClick={() => { chooseAvatar(item.imageURL); }}
        imageURL={item.imageURL}
        key={item.imageURL}
      />
    ))}
  </Wrapper>
);

SelectionPopup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    imageURL: PropTypes.string.isRequired,
  })),
  chooseAvatar: PropTypes.func,
};

SelectionPopup.defaultProps = {
  items: [],
  chooseAvatar: () => false,
};

export default SelectionPopup;
