import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  background: ${imageURL => `url(${imageURL.imageURL}) no-repeat center`};
  background-size: cover;
  height: 160px;
  width: 160px;
  border: 2px solid white;
  padding: 20px;
  margin: 10px;
  display: inline-block;
`;

const AvatarImage = styled.img`
`;

const Avatar = ({ imageURL, ...rest }) => (
  <Wrapper imageURL={imageURL} {...rest}>
    {/* <AvatarImage src={imageURL} /> */}
  </Wrapper>
);

Avatar.propTypes = {
  imageURL: PropTypes.string,
};

Avatar.defaultProps = {
  imageURL: '',
};

export default Avatar;
