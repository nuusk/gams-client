import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormWrapper = styled.form`
  background: ${imageURL => `url(${imageURL.imageURL}) no-repeat center`};
  background-size: cover;
  height: 260px;
  width: 260px;
  border: 2px solid white;
  padding: 20px;
  margin: 10px;
  display: inline-block;

  input {
    width: 100%;
    box-sizing: border-box;
  }
`;

const Form = ({
  children, ...rest
}) => (
  <FormWrapper {...rest}>{children}</FormWrapper>
);

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Form.defaultProps = {
  children: [],
};

export default Form;
