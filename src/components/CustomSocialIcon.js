import React from 'react';
import { SocialIcon } from 'react-social-icons';
import theme from '../styles/theme';

const CustomNavLink = ({ ...rest }) => (
  <SocialIcon
    {...rest}
    bgColor={theme.color.palette.eerieBlack}
    style={{ height: 30, width: 30 }}
  />
);

export default CustomNavLink;
