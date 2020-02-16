import React, { useState } from 'react';
import styled, {css} from 'styled-components';

const toggle = ({dropdown}) => {
	const openDropdown = css`
		border-top: 0;
		display: inline-block;
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
	cursor: pointer;
  margin-bottom: 0.25rem;
  position: relative;
  width: 100%;
  @media (max-width : 425px) {
		max-width: 100%;
	}
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

const DropdownContentContainer = styled.div`
	background: ${({ theme }) => theme.colors.white};
  border: 0.0625rem solid ${({ theme }) => theme.colors.default};
  border-radius: 0 0 0.5rem 0.5rem;
  color: ${({ theme }) => theme.colors.black};
  box-sizing: border-box;
  display: none;
  font-size: 1rem;
  max-height: 10rem;
  outline: none;
  overflow-y: scroll;
  position: absolute;
  width: 100%;
	${(props) => toggle(props)};
	z-index: 2;
		@media (max-width : 425px) {
			max-width: 100%;
		}
`;

const DropdownItem = styled.div`
	background: ${({ theme }) => theme.colors.white};
	border-width: 0 0 0.0625rem 0;
	border-style: solid;
	border-color: ${({ theme }) => theme.colors.default};
  color: ${({ theme }) => theme.colors.black};
  box-sizing: border-box;
  font-size: 1rem;
  outline: none;
  padding: 0.75rem 1rem 0.875rem;
  width: 100%;
	${(props) => toggle(props)};
	:hover {
		color: ${({ theme }) => theme.colors.green};
  }
	:first-child {
		border-top: 0;
	}
	:last-child {
		border: 0;
	}
`;

const Dropdown = styled.div`
  border: 0.0625rem solid ${({ theme }) => theme.colors.default};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  font-size: 1rem;
  outline: none;
  padding: 0.75rem 1rem 0.875rem;
  position: relative;
  width: 100%;
	${(props) => updateBorder(props)};
	
	:hover {
    border-color: ${({ theme }) => theme.colors.black};
	}
`;
// TODO: Add Event Listener To Listen On Click Outside Of Component to Close Dropdown
export default (props) => {
	function updateDropdownValue(value) {
		setDropdownValue(value);
		toggleDropdown(!dropdown);
		onSelected(value);
	}
	function toggle() {
		toggleDropdown(!dropdown)
	}
	const {type, onSelected, label = 'Default Dropdown', items = ['Default Value 1', 'Default Value 2'], ...RemainingProps} = props;
	const [dropdownValue, setDropdownValue] = useState(label);
	const [dropdown, toggleDropdown] = useState(false);
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
				<DropdownContentContainer
					dropdown={dropdown}
				>
					{items.map((item, i) => {
						return (
							<DropdownItem
								key={i}
								onClick={() => updateDropdownValue(item)}
							>{item}
							</DropdownItem>
						)
					})}
				</DropdownContentContainer>
		</DropdownContainer>
	)
}
