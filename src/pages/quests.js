import React, {useState} from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';
import DashboardLayout from '../layouts/DashboardLayout';
import {CheckboxBlank} from 'styled-icons/remix-line/CheckboxBlank';
import {Checkbox} from 'styled-icons/remix-line/Checkbox';
import {TrashAlt} from 'styled-icons/boxicons-regular/TrashAlt';

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
	grid-auto-rows: 10%;
	grid-template-columns: 1fr;
	overflow: scroll;
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
						<Card backgroundColor={({ theme }) => theme.colors.disabled_NavBar_Item}>Side Quest E</Card>
						<Card backgroundColor={({ theme }) => theme.colors.disabled_NavBar_Item}>Side Quest F</Card>
						<Card backgroundColor={({ theme }) => theme.colors.disabled_NavBar_Item}>Side Quest G</Card>
						<Card backgroundColor={({ theme }) => theme.colors.disabled_NavBar_Item}>Side Quest H</Card>
					</QuestsContainer>
					<TasksContainer>
						<Card backgroundColor={({ theme }) => theme.colors.disabled}><CheckboxBlank size={20} /><span>Plot Point 1</span><TrashAlt size={20} /></Card>
						<Card backgroundColor={({ theme }) => theme.colors.disabled}><CheckboxBlank size={20} /><span>Plot Point 2</span><TrashAlt size={20} /></Card>
						<Card backgroundColor={({ theme }) => theme.colors.green}><span><Checkbox size={20} /></span>Plot Point 3 <span><TrashAlt size={20} /></span></Card>
						<Card backgroundColor={({ theme }) => theme.colors.green}><span><Checkbox size={20} /></span>Plot Point 4 <span><TrashAlt size={20} /></span></Card>
						<Card backgroundColor={({ theme }) => theme.colors.green}><span><Checkbox size={20} /></span>Plot Point 5 <span><TrashAlt size={20} /></span></Card>
						<Card backgroundColor={({ theme }) => theme.colors.disabled}><CheckboxBlank size={20} /><span>Plot Point 6</span><TrashAlt size={20} /></Card>
					</TasksContainer>
				</BottomContainer>
			</MainContainer>
		</DashboardLayout>
	)
}
