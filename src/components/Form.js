import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
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
