import React, {useState} from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Task from '../components/Task';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';
import DashboardLayout from '../layouts/DashboardLayout';
import { useRouter } from 'next/router';
import {quests} from '../utils/mock.quest-data.js';

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
	height: min-content;
	grid-template-columns: 1fr;
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
	const [plotPoints, setPlotPoints] = useState([]);
	const types = ['Quest', 'Plot Point'];
	const router = useRouter();
	async function updatePlotPoints(quest) {
		await router.push(`/quests?${quest.title}=true`);
		setPlotPoints(quest.plotPoints);
	}
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
						{quests.map((quest, i) => {
							return (
								<Card
									key={i}
									cursor={'pointer'}
									onClick={() => updatePlotPoints(quest)}
									backgroundColor={(router.query[[quest.title]])? ({ theme }) => theme.colors.blue : ({ theme }) => theme.colors.disabled_NavBar_Item}>
									{quest.title}
								</Card>
							)
						})}
					</QuestsContainer>
					<TasksContainer>
						{plotPoints.map((plotPoint, i) => {
							return (
								<Task key={plotPoint.title} checked={plotPoint.checked} text={plotPoint.title} />
							)
						})}
					</TasksContainer>
				</BottomContainer>
			</MainContainer>
		</DashboardLayout>
	)
}
