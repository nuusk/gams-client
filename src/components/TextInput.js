import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import generateUniqueId from '../helpers/generateUniqueId';

const InputGroup = styled.div`
  position: relative;
  margin: 1rem 0;
  padding: 0 1rem;
  width: 100%;
  box-sizing: border-box;
  
  &::after {
    display: block;
    content: '';
    position: absolute;
    width: 0%;
    height: 100%; 
    top: 0;
    right: 0;
    transition: ${({ theme }) => theme.visuals.transition.base};
    z-index: ${({ theme }) => theme.visuals.zindex.middle}
  }

  &::before {
    display: block;
    content: '';
    position: absolute;
    width: 10px
    height: 20px;
    right: 0;
    top: 40%;
    transform: translateY(-50%) rotate(45deg);
    border: 3px solid;
    border-left: none;
    border-top: none;
    transition: ${({ theme }) => theme.visuals.transition.base};
    z-index: ${({ theme }) => theme.visuals.zindex.front};
    opacity: 0;
  }

  ${({ primary }) => primary && css`
    color: ${({ theme }) => theme.color.accent.primary};
    background-color: ${({ theme }) => theme.color.accent.secondary};
  `}

  ${({ inverted }) => inverted && css`
    color: ${({ theme }) => theme.color.accent.secondary};

    &::after {
      background-color: ${({ theme }) => theme.color.accent.primary};
      width: 100%;
    }

    &::before {
      opacity: 1;
      border-color: ${({ theme }) => theme.color.accent.secondary};
      right: 20px;
    }
  `}

  ${({ invalid }) => invalid && css`
    color: ${({ theme }) => theme.color.text.primary};
    animation: error .18s linear, error .18s linear .18s;

    &::after {
      background-color: ${({ theme }) => theme.color.accent.error};
      width: 100%;
    }

    &::before {
      opacity: 0;
      right: 0;
    }
  `}

  @keyframes error {
    0% {
      transform: translateX(0) skew(0);
    }
    25% {
      transform: translateX(-10px) skew(-5deg);
    }
    50% {
      transform: translateX(0) skew(5deg);
    }
    75% {
      transform: translateX(10px) skew(0);
    }
    100% {
      transform: translateX(0) skew(-5deg);
    }
  }
`;

const InputLabel = styled.label`
  position: absolute;
  display: block;
  pointer-events: none;
  color: ${({ theme }) => theme.color.accent.secondary};
  font-size: ${({ theme }) => theme.font.size.label.secondary};
  opacity: 0;
  top: 1rem;
  transition: 
    ${({ theme }) => theme.visuals.transition.quick},
    top ${({ theme }) => theme.visuals.transition.base};

  ${({ isActive }) => isActive && css`
    top: -1rem;
    opacity: 1;
  `}

  ${({ invalid }) => invalid && css`
    color: ${({ theme }) => theme.color.accent.error};
  `}
`;

const InputElement = styled.input`
  border: none;
  width: 100%;
  height: 2rem;
  background-color: transparent;
  color: inherit;
  position: relative;
  z-index: ${({ theme }) => theme.visuals.zindex.front};
  transition: color ${({ theme }) => theme.visuals.transition.base};

  &::placeholder {
    color: ${({ theme }) => theme.color.text.secondary} !important;
  }

  &:focus {
    outline: 0;
    border-bottom-color: ${({ theme }) => theme.color.accent.primary.light};
  }
`;

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.uniqueId = generateUniqueId();

    this.state = {
      isOk: false,
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleBlur(e) {
    // validate if input is ok
    const { value, name } = e.target;
    const { validateValue, updateInvalid } = this.props;
    if (value !== '') {
      const error = validateValue(e);
      updateInvalid(name, error);
      if (!error) {
        this.setState({ isOk: true });
      }
    }
  }

  handleFocus() {
    this.setState({ isOk: false });
  }

  render() {
    const {
      isFocused, isOk,
    } = this.state;
    const {
      value, placeholder, type, name, onChange, required, primary, invalid, validateValue, updateInvalid
    } = this.props;
    const isFilled = value !== '';

    return (
      <InputGroup inverted={isOk} primary={primary} invalid={invalid}>
        <InputLabel
          htmlFor={this.id}
          isActive={isFocused || isFilled || invalid}
          invalid={invalid}
        >
          {invalid || placeholder}
        </InputLabel>
        <InputElement
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          aria-label={name}
          id={this.uniqueId}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onChange={(e) => {
            this.setState({
              isOk: false,
            });
            onChange(e, 'value');
            if (invalid) {
              updateInvalid(name, validateValue(e));
            }
          }}
          isFilled={isFilled}
          required={required}
        />
      </InputGroup>
    );
  }
}

TextInput.defaultProps = {
  required: false,
  primary: true,
  invalid: '',
  validateValue: () => false,
  updateInvalid: () => false,
};

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  primary: PropTypes.bool,
  invalid: PropTypes.string,
  validateValue: PropTypes.func,
  updateInvalid: PropTypes.func,
};

export default TextInput;
