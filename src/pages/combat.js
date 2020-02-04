import React, {useState} from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Dropdown from '../components/Dropdown';
import Card from '../components/Card';
import styled from 'styled-components';

const CombatLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr;
  grid-auto-rows: 4rem 1fr;
	padding: ${({theme}) => theme.style.padding[1]};
`;

const DropdownContainer = styled.div`
	display: flex;
	justify-content: flex-start;
`;

const EncounterContainer = styled.div`
	column-gap: 1rem;
	display: grid;
	grid-auto-rows: 25%;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	height: 100%;
	overflow: scroll;
	row-gap: 1rem;
`;

export default () => {
	const [encounter, setEncounter] = useState('');
	const encounters = ['Encounter 1', 'Encounter 2', 'Encounter 3'];
	return (
		<DashboardLayout>
			<CombatLayout>
				<DropdownContainer>
					<Dropdown value={encounter} onSelected={(value) => {setEncounter(value)}}  label={'Select an Encounter'} items={encounters}/>
				</DropdownContainer>
				<EncounterContainer>
					<Card backgroundColor={({ theme }) => theme.colors.blue}/>
					<Card backgroundColor={({ theme }) => theme.colors.green}/>
					<Card backgroundColor={({ theme }) => theme.colors.green}/>
					<Card backgroundColor={({ theme }) => theme.colors.green}/>
					<Card backgroundColor={({ theme }) => theme.colors.green}/>
					<Card backgroundColor={({ theme }) => theme.colors.green}/>
					<Card backgroundColor={({ theme }) => theme.colors.green}/>
					<Card backgroundColor={({ theme }) => theme.colors.green}/>
					<Card backgroundColor={({ theme }) => theme.colors.green}/>
					<Card backgroundColor={({ theme }) => theme.colors.green}/>
					<Card backgroundColor={({ theme }) => theme.colors.green}/>
				</EncounterContainer>
			</CombatLayout>
		</DashboardLayout>
	)
}
