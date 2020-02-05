import React, {useState} from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Dropdown from '../components/Dropdown';
import Card from '../components/Card';
import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';

const CombatLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr;
  grid-auto-rows: 4rem 1fr;
	padding: ${({theme}) => theme.style.padding[1]};
`;

const DropdownContainer = styled.div`
	display: grid;
	column-gap: 1rem;
	grid-template-columns: 1fr;
`;

const EncounterContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 40%;
	column-gap: 1rem;
`;
const CharactersContainer = styled.div`
	display: grid;
	grid-auto-rows: 20%;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	column-gap: 1rem;
	
	justify-content: space-between;
	overflow-x:scroll;
`;

const ActionsContainer = styled.div`
    grid-auto-rows: 10%;
    display: grid;
    row-gap: 1rem;
    grid-template-columns: 1fr;
`;

const ActionContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 1rem;
`;

export default () => {
	const [encounter, setEncounter] = useState('');
	const encounters = ['Encounter 1', 'Encounter 2', 'Encounter 3', 'Encounter 4'];
	const [action, setAction] = useState('Damage');
	const actions = ['Damage', 'Heal'];
	const [player, setPlayer] = useState('Player 1');
	const players = ['Player 1', 'Player 2', 'Player 3'];
	return (
		<DashboardLayout>
			<CombatLayout>
				<DropdownContainer>
					<Dropdown value={encounter} onSelected={(value) => {setEncounter(value)}} label={'Encounter 1'} items={encounters}/>
				</DropdownContainer>
				<EncounterContainer>
					<CharactersContainer>
						<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.blue} />
						<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.red}/>
						<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.red}/>
						<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.blue}/>
						<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.red}/>
						<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.blue}/>
						<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.red}/>
						<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.blue}/>
						<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.red}/>
						<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.blue}/>
						<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.red}/>
						<Card borderRadius={1} backgroundColor={({ theme }) => theme.colors.green}/>
					</CharactersContainer>
					<ActionsContainer>
						<ActionContainer>
							<Dropdown value={action} onSelected={(value) => {setAction(value)}} label={'Damage'} items={actions}/>
							<Input label="Amount"/>
						</ActionContainer>
						<Dropdown value={player} onSelected={(value) => {setPlayer(value)}} label={'Player 1'} items={players}/>
						<ActionContainer>
							<Button block>{action} {player}</Button>
							<Button block>End Turn</Button>
						</ActionContainer>
					</ActionsContainer>
				</EncounterContainer>
			</CombatLayout>
		</DashboardLayout>
	)
}
