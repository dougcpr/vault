import React, {useState}  from 'react';
import styled, {css} from 'styled-components';
import Card from './Card';
import Checkbox from './Checkbox';
import {CheckboxBlank} from 'styled-icons/remix-line/CheckboxBlank';
import {TrashAlt} from 'styled-icons/boxicons-regular/TrashAlt';

const taskComplete = ({task}) => {
	const strikeThroughText = css`
		text-decoration: line-through;
	`;
	return task ? strikeThroughText : null;
};

const CheckboxContainer = styled.div`
	display: grid;
	grid-template-columns: 10% 1fr;
`;

const PlotText = styled.span`
	position: relative;
	top: 0.125rem;
	${(props) => taskComplete(props)};
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

const TaskContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 5%;
`;

export default (props) => {
	const {checked = false, text = 'Sample Text', ...RemainingProps } = props;
	const [task, toggleTask] = useState(checked);
	function toggle() {
		toggleTask(!task);
	}
	function deleteTask() {
		console.log('Delete Task');
	}
	return (
		<Card
		      cursor={'pointer'}
		      backgroundColor={task ? ({ theme }) => theme.colors.green : ({ theme }) => theme.colors.disabled}>
			{/* Checkbox + Text + Trashcan */}
			<TaskContainer>
				<CheckboxContainer onClick={toggle}>
					<Checkbox checked={task}/>
					<PlotText task={task}>{text}</PlotText>
				</CheckboxContainer>
				<Trashcan onClick={() => deleteTask()} />
			</TaskContainer>
		</Card>
	)
}
