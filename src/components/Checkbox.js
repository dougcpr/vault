import React  from 'react';
import styled from 'styled-components';
import {Checkbox} from 'styled-icons/remix-line/Checkbox';
import {CheckboxBlank} from 'styled-icons/remix-line/CheckboxBlank';

export const FilledCheckbox = styled(Checkbox)`
	width: 1.25rem;
	height: 1.25rem;
	&:hover {
		cursor: pointer;
		color: white;
	}
`;

export const BlankCheckbox = styled(CheckboxBlank)`
	width: 1.25rem;
	height: 1.25rem;
	&:hover {
		cursor: pointer;
		color: ${({ theme }) => theme.colors.green};
	}
`;

export default (props) => {
	const {checked, ...RemainingProps } = props;
	if(checked) {
		return (
			<FilledCheckbox/>
		)
	} else {
		return (
			<BlankCheckbox />
		)
	}
}
