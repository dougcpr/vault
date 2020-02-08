import React, {useState} from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import CenterLayout from '../layouts/CenterLayout';
import Dropdown from '../components/Dropdown';
import Card from '../components/Card';
import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';
import {DiffAdded} from 'styled-icons/octicons/DiffAdded';

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
	@media (max-width : 812px) {
		row-gap: 1rem;
		grid-template-columns: 1fr;
  }
`;
const CharactersContainer = styled.div`
	column-gap: 1rem;
  display: grid;
  grid-auto-rows: 33%;
  grid-template-columns: 1fr 1fr 1fr;
	@media (max-width : 812px) {
		row-gap: 1rem;
		justify-content: center;
    grid-auto-rows: 10rem;
		grid-template-columns: 1fr 1fr;
  }
`;

const ActionsContainer = styled.div`
    grid-auto-rows: 10%;
    display: grid;
    row-gap: 1rem;
    grid-template-columns: 1fr;
    @media (max-width : 812px) {
			row-gap: 0rem;
			grid-template-rows: 1fr 1fr;
      grid-auto-rows: auto;
    }
`;

const ActionContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 1rem;
	@media (max-width : 812px) {
		grid-template-columns: 1fr 1fr;
  }
`;

const CenterIcon = styled.div`
		position: relative;
    top: 45%;
    left: 50%;
    transform: translate(-45%, -50%);
    width: min-content;
`;

const AddIcon = styled(DiffAdded)`
		width: 3rem;
		height: 3rem;
    :hover {
      cursor: pointer;
      color: ${({theme}) => theme.colors.green};
    }
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
						<Card autoHeight={true} flat backgroundColor={({ theme }) => theme.colors.disabled_NavBar_Item} />
						<Card autoHeight={true} flat backgroundColor={({ theme }) => theme.colors.disabled_NavBar_Item} />
						<Card autoHeight={true} flat backgroundColor={({ theme }) => theme.colors.disabled_NavBar_Item} />
						<Card autoHeight={true} flat >
							<CenterIcon>
								{/* open http://dnd5eapi.co/api/monsters*/}
								<AddIcon />
							</CenterIcon>
						</Card>
					</CharactersContainer>
					<ActionsContainer>
						<ActionContainer>
							<Dropdown value={action} onSelected={(value) => {setAction(value)}} label={'Damage'} items={actions}/>
							<Input aria-label="Amount" label="Amount"/>
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
