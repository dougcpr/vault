import React, { useState } from 'react';
import styled, {css} from 'styled-components';

const toggle = ({dropdown}) => {
	const openDropdown = css`
		border-top: 0;
		display: block;
	`;
	return dropdown ? openDropdown : null;
};

const rotate = ({dropdown}) => {
	const rotateArrow = css`
	transform: rotate(225deg);
	transition: 0.5s;
	margin-top: 5px;
	`;
	return dropdown ? rotateArrow : null;
};

const updateBorder = ({dropdown}) => {
	const defaultBorder = css`
		border-radius: 0.5rem 0.5rem 0 0;
	`;
	return dropdown ? defaultBorder : null;
};

const DropdownContainer = styled.div`
  background-color:  ${({ theme }) => theme.colors.white};
  margin-bottom: 0.25rem;
  height: 2rem;
  width: 100%;
`;

const Arrow = styled.span`
  border: solid ${({ theme }) => theme.colors.default};
	border-width: 0 2px 2px 0;
  display: block;
  height: 1px;
  padding: 5px;
	transform: rotate(45deg);
	transition: 0.5s;
	${(props) => rotate(props)};
`;

const DropdownContent = styled.div`
  border: 0.0625rem solid ${({ theme }) => theme.colors.default};
  border-radius: 0 0 0.5rem 0.5rem;
  color: ${({ theme }) => theme.colors.default};
  box-sizing: border-box;
  display: none;
  font-size: 1rem;
  outline: none;
  overflow-y: scroll;
  padding: 0.75rem 1rem 0.875rem;
  width: 100%;
	${(props) => toggle(props)};
`;

const Dropdown = styled.div`
  border: 0.0625rem solid ${({ theme }) => theme.colors.default};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.default};
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  font-size: 1rem;
  outline: none;
  padding: 0.75rem 1rem 0.875rem;
  position: relative;
  width: 100%;
	${(props) => updateBorder(props)};
`;

export default (props) => {
	function updateDropdownValue(e) {
		const value = e.target.value;
		setDropdownValue(value);
	}
	function toggle() {
		toggleDropdown(!dropdown)
	}
	const {type, value = 'Select a Value', options = ['value 1', 'value 2'], ...RemainingProps} = props;
	const [dropdownValue, setDropdownValue] = useState(value);
	const [dropdown, toggleDropdown] = useState(false);
	{options.map(option => {
		console.log(option);
	})}
	return (
		<DropdownContainer>
			<Dropdown
				dropdown={dropdown}
				onClick={toggle}
				{...RemainingProps}
			>
				{dropdownValue}
				<Arrow
					dropdown={dropdown} />
			</Dropdown>
			<DropdownContent
				dropdown={dropdown}
				onClick={(event) => {updateDropdownValue(event)}}
			>
			</DropdownContent>
		</DropdownContainer>
	)
}
