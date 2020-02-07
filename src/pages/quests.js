import React, {useState} from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Task from '../components/Task';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';
import DashboardLayout from '../layouts/DashboardLayout';
import {Bar} from 'react-chartjs-2';
import {quests} from '../utils/mock.quest-data.js';
import {theme} from '../pages/_app';
import {BarChartData} from '../utils/mock.chart-data.js'

const MainContainer = styled.div`
	column-gap: 1rem;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 10% 1fr;
	padding: ${({ theme }) => theme.style.padding[1]};
	row-gap: 1rem;
`;

const QuestsContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr 50%;
	row-gap: 1rem;
`;

const ListOfQuests = styled.div`
	display: grid;
	height: min-content;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: 1fr;
	column-gap: 1rem;
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
	const [plotPoints, setPlotPoints] = useState(quests[0].plotPoints);
	const [questTitle, setQuestTitle] = useState(quests[0].title);
	const types = ['Quest', 'Task'];
	console.log(quests);
	async function updatePlotPoints(quest) {
		setQuestTitle(quest.title);
		setPlotPoints(quest.plotPoints);
	}
	return (
		<DashboardLayout>
			<MainContainer>
				<AddQuestContainer>
					<Input aria-label="Title" label="Title"/>
					<Dropdown value={type} onSelected={(value) => {setType(value)}} label={'Quest'} items={types}/>
					<Button block>Add {type}</Button>
				</AddQuestContainer>
				<BottomContainer>
					<QuestsContainer>
						<ListOfQuests>
							{quests.map((quest, i) => {
								return (
									<Card
										key={i}
										cursor={'pointer'}
										onClick={() => updatePlotPoints(quest)}
										backgroundColor={
											quest.title === questTitle ?
												theme.colors.chartColors.backgroundColor[i]
												: theme.colors.chartColors.disabledBackground[i]}>
										{quest.title}
									</Card>
								)
							})}
						</ListOfQuests>
						<Card borderRadius={1}>
							<Bar data={BarChartData} width={100} height={180} options={{maintainAspectRatio: false}}/>
						</Card>
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
