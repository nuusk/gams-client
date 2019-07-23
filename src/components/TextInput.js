import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const InputGroup = styled.div`
  position: relative;
  margin: 1rem 0;
`;

const InputLabel = styled.label`
  position: absolute;
  display: block;
  pointer-events: none;
  color: ${({ theme }) => theme.color.elements.label};
  font-size: ${({ theme }) => theme.font.size.label.primary};
  top: -1.5rem;
`;

const InputElement = styled.input`
  border: none;
  border-bottom: 
    ${({ theme }) => theme.size.line} 
    solid 
    ${({ theme }) => theme.color.elements.line}; 
  border-radius: ${({ theme }) => theme.size.borderRadius};
  color: ${({ theme }) => theme.color.text.primary};
  width: 100%;
  background: transparent;

  &:focus {
    outline: 0;
    border-bottom-color: ${({ theme }) => theme.color.accent.primary.light};
  }
`;

class TextInput extends Component {
  constructor(props) {
    super(props);

    // const { id } = this.props;

    this.state = {
      isFocused: false,
    };

    // this.id = id;
    // this.textInput = React.createRef();
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  componentDidMount() {
    console.log('mounted');
  }

  focusTextInput() {
    console.log('focusing');
    // this.textInput.current.focus();
  }

  handleBlur() {
    this.setState({ isFocused: false });
  }

  handleFocus() {
    this.setState({ isFocused: true });
  }

  render() {
    const { isFocused } = this.state;
    const {
      value, placeholder, type, name, onChange, required,
    } = this.props;
    const isFilled = value !== '';

    return (
      <InputGroup>
        {/* <InputLabel
          htmlFor={this.id}
          isActive={isFocused || isFilled}
        >
          {placeholder}
        </InputLabel> */}
        <InputElement
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          // aria-label={name}
          // ref={input => input && input.focus()}
          // id={this.generatedId}
          // onFocus={this.handleFocus}
          // onBlur={this.handleBlur}
          onChange={onChange}
          isFilled={isFilled}
          required={required}
        />
      </InputGroup>
    );
  }
}

TextInput.defaultProps = {
  required: false,
};

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default TextInput;
