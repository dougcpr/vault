import React  from 'react';
import styled, {css} from 'styled-components';

const blockClassMixin = (props) => {
	const blockStyle = css`
		max-width: 100%;
	`;
	return props.block ? blockStyle : null;
};

const Button = styled.button`
	background-color: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: ${({ theme }) => theme.colors.font_medium};
  font-weight: 500;
  display: block;
  max-height: 2.25rem;
  min-width: 6.25rem;
  max-width: 9.375rem;
  outline: none;
  padding: 0.625rem 1rem;
  text-align: center;
  text-transform: capitalize;
  width: 100%;
 &:disabled {
	  background-color: ${({ theme }) => theme.colors.button_disabled_bg};
	  border-bottom-color: ${({ theme }) => theme.colors.button_disabled};
	  color: ${({ theme }) => theme.colors.button_disabled};
	  pointer-events: none;
	}
 &:hover {
    filter: brightness(105%);
	}
 &:active {
    filter: brightness(95%);
	}
	${(props) => blockClassMixin(props)};
`;

export default (props) => {
	const {disabled, block, ...RemainingProps } = props;
	return (
		<Button
			disabled={disabled}
			block={block}
			{...RemainingProps}
		>
			{props.children}
		</Button>
	)
}
