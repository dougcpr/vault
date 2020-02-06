import React, {useState}  from 'react';
import styled, {css} from 'styled-components';
import {Checkbox} from 'styled-icons/remix-line/Checkbox';
import {CheckboxBlank} from 'styled-icons/remix-line/CheckboxBlank';
import {TrashAlt} from 'styled-icons/boxicons-regular/TrashAlt';
import Card from './Card';

const isComplete = ({checked}) => {
	console.log(checked);
	const strikeThroughText = css`
		text-decoration: strikethrough;
	`;
	return checked ? null : strikeThroughText;
};

const CheckboxContainer = styled.div`
	display: grid;
	grid-template-columns: 10% 1fr 5%;
`;

const PlotText = styled.span`
	position: relative;
	top: 0.125rem;
	${(props) => isComplete(props)};
`;

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

export const Trashcan = styled(TrashAlt)`
	width: 1.25rem;
	height: 1.25rem;
	&:hover {
		cursor: pointer;
		color: red;
	}
`;

export default (props) => {
	let {checked, block, text = 'Sample Text', ...RemainingProps } = props;
	const [task, toggleTask] = useState(checked);
	function toggle() {
		toggleTask(!task)
		checked = task;
	}
	if(task) {
		return (
			<Card backgroundColor={task ? ({ theme }) => theme.colors.green : ({ theme }) => theme.colors.disabled}>
				<CheckboxContainer>
					<FilledCheckbox onClick={toggle} /><PlotText>{text}</PlotText><Trashcan />
				</CheckboxContainer>
			</Card>
		)
	} else {
		return (
			<Card backgroundColor={task ? ({ theme }) => theme.colors.green : ({ theme }) => theme.colors.disabled}>
				<CheckboxContainer>
					<BlankCheckbox onClick={toggle} /><PlotText>{text}</PlotText><Trashcan />
				</CheckboxContainer>
			</Card>
		)
	}
}
