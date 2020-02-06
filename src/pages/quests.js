import React, {useState} from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Task from '../components/Task';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';
import DashboardLayout from '../layouts/DashboardLayout';

const MainContainer = styled.div`
	column-gap: 1rem;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 10% 1fr;
	padding: ${({ theme }) => theme.style.padding[1]};
	row-gap: 1rem;
`;

const QuestsContainer = styled.div`
	overflow: scroll;
	column-gap: 1rem;
	display: grid;
	grid-auto-rows: 20%;
	grid-template-columns: 1fr 1fr;
	row-gap: 1rem;
`;

const BottomContainer = styled.div`
	display: grid;
	column-gap: 1rem;
	grid-template-columns: 1fr 60%;
`;

const AddQuestContainer = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	column-gap: 1rem;
`;

const TasksContainer = styled.div`
	column-gap: 1rem;
	display: grid;
	grid-template-columns: 1fr;
	height: min-content;
	row-gap: 0.5rem;
`;


export default () => {
	const [type, setType] = useState('Quest');
	const types = ['Quest', 'Plot Point'];
	return (
		<DashboardLayout>
			<MainContainer>
				<AddQuestContainer>
					<Input label="Title"/>
					<Dropdown value={type} onSelected={(value) => {setType(value)}} label={'Quest'} items={types}/>
					<Button block>Add {type}</Button>
				</AddQuestContainer>
				<BottomContainer>
					<QuestsContainer>
						<Card backgroundColor={({ theme }) => theme.colors.blue}>Main Quest</Card>
						<Card backgroundColor={({ theme }) => theme.colors.disabled_NavBar_Item}>Side Quest A</Card>
						<Card backgroundColor={({ theme }) => theme.colors.disabled_NavBar_Item}>Side Quest B</Card>
						<Card backgroundColor={({ theme }) => theme.colors.disabled_NavBar_Item}>Side Quest C</Card>
						<Card backgroundColor={({ theme }) => theme.colors.disabled_NavBar_Item}>Side Quest D</Card>
					</QuestsContainer>
					<TasksContainer>
						<Task />
						<Task />
						<Task checked={true} />
					</TasksContainer>
				</BottomContainer>
			</MainContainer>
		</DashboardLayout>
	)
}
