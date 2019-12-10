import React, { useState } from 'react';
import styled, {css} from 'styled-components';

const containsTextMixin = ({containsText}) => {
	const filledInput = css`
	& + label {
	  background-color: inherit;
	  bottom: 3.5rem;
	  left: 0.4375rem;
	  color: ${({ theme }) => theme.colors.default};
	  font-size: 0.6875rem;
	  margin: 0.3125rem;
	  padding: 0 0.3125rem;
	  position: relative;
	}
	border: 0.0625rem solid ${({ theme }) => theme.colors.default};
	`;
	return containsText ? filledInput : null;
};

const InputContainer = styled.div`
  background-color:  ${({ theme }) => theme.colors.white};
  height: 3.5625rem;
  width: 100%;
`;

const Input = styled.input`
  border: 0.0625rem solid ${({ theme }) => theme.colors.default};
  border-radius: 0.5rem;
  box-sizing: border-box;
  font-size: 1rem;
  outline: none;
  padding: 0.75rem 1rem 0.875rem;
  width: 100%;
  
  &:disabled {
	  background-color: ${({ theme }) => theme.colors.disabled};
	  pointer-events: none;
	}

	&:disabled + label {
	  background-color: ${({ theme }) => theme.colors.disabled};
	  pointer-events: none;
	}

	&::placeholder, label {
    color: ${({ theme }) => theme.colors.default}
	}
	
	&:focus:not(:disabled) {
	  border: 0.0625rem solid ${({ theme }) => theme.colors.green};
	  transition: 0.2s both;
	  position: relative;
	}

  &:hover:not(:focus):not(:disabled) {
	  border: 0.0625rem solid ${({ theme }) => theme.colors.input_border_hover};
	  transition: 0.2s;
	}

 &:focus:not(:disabled):empty + label {
	  background-color: inherit;
	  bottom: 3.5rem;
	  color: ${({ theme }) => theme.colors.green};
	  font-size: 0.6875rem;
	  left: 0.4375rem;
	  margin: 0.3125rem;
	  transition: 0.2s;
	  padding: 0 0.3125rem;
	  position: relative;
}
	${(props) => containsTextMixin(props)};
`;

const Label = styled.label`
  background-color: inherit;
  bottom: 2rem;
  border-radius: 0.1875rem;
  color: ${({ theme }) => theme.colors.default};
  left: 1.25rem;
  letter-spacing: 0.009375em;
  pointer-events: none;
  position: relative;
  transition: 0.3s;
`;

export default (props) => {
	function handleInputChange(e) {
		const value = e.target.value;
		setContainsText(value.length > 0);
		setInputValue(value);
	}
	const { disabled, label, type, value = '', ...RemainingProps } = props;
	const [inputValue, setInputValue] = useState(value);
	const [containsText, setContainsText] = useState(value.length > 0);
	return (
		<InputContainer>
			<Input
				containsText={containsText}
				type={type}
				defaultValue={inputValue}
				disabled={disabled}
				onInputCapture={(event) => handleInputChange(event)}
				{...RemainingProps}
			/>
			<Label>{label}</Label>
		</InputContainer>
	)
}
